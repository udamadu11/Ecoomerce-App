import React from 'react';
import AppTextInput from '../component/AppTextInput';
import Screen from '../component/Screen';
import Button from '../component/Button';
import { Image, StyleSheet, Text } from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../component/errorMessage';

const validationSchema = Yup.object().shape({
  email:Yup.string().required().email(),
  password:Yup.string().required().min(4).max(6)
});

function LoginScreen() {
    return (
      <Screen style={styles.screen}>
        <Image style={styles.image} source={require('../Assets/store.png')} />
        <Formik
          initialValues={{email:'',password:''}}
          onSubmit ={(values) => console.log(values)}
          validationSchema={validationSchema}
          >
          {({handleChange,handleSubmit,errors})=>(
            <>
              <AppTextInput 
              icon='email'
              placeholder='Email'
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              textContentType='emailAddress'
              onChangeText={handleChange("email")}
              />
              <ErrorMessage error={errors.email} />
              <AppTextInput
              icon='lock'
              placeholder='Password'
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry
              textContentType='password'
              onChangeText={handleChange("password")}
              />
              <ErrorMessage error={errors.password} />
              <Button title="Login" onPress={handleSubmit} />
            </>
          )}
        </Formik>
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