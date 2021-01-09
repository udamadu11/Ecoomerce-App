import React from 'react';

import Screen from '../component/Screen';
import { Image, StyleSheet, Text } from 'react-native';
import * as Yup from 'yup';

import { AppForm,AppFormikFiled,SubmitButton } from "../component/forms";


const validationSchema = Yup.object().shape({
  email:Yup.string().required().email(),
  password:Yup.string().required().min(4).max(6)
});

function LoginScreen() {
    return (
      <Screen style={styles.screen}>
        <Image style={styles.image} source={require('../Assets/store.png')} />
        <AppForm
          initialValues={{email:"",password:""}}
          onSubmit ={(values) => console.log(values)}
          validationSchema={validationSchema}
          >
           <AppFormikFiled
              icon='email'
              placeholder='Email'
              autoCapitalize='none'
              autoCorrect={false}
              name='email'
              keyboardType='email-address'
              textContentType='emailAddress'
              />
              <AppFormikFiled
              icon='lock'
              placeholder='Password'
              autoCapitalize='none'
              autoCorrect={false}
              name='password'
              secureTextEntry
              textContentType='password'
              />
              <SubmitButton title='login' />
        </AppForm>
      </Screen>
    );
}
const styles = StyleSheet.create({
    screen:{
      padding:5
    },
    image:{
      width:100,
      height:100,
      justifyContent:'center',
      alignSelf:'center',
      borderRadius: 50,
      marginVertical:20
    }
  })

export default LoginScreen;