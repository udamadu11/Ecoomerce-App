import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { AppForm, AppFormikFiled, SubmitButton, AppFormPicker} from '../component/forms';
import Screen from '../component/Screen';
import * as Yup from 'yup';
import PickerItemCategory from '../component/PickerItemCategory';

const validationSchema = Yup.object().shape({
    title:Yup.string().required().label("Title"),
    price:Yup.number().required().label("Price"),
    description:Yup.string().required().label("Description"),
    category:Yup.object().nullable().required().label("Category")
});

const categories = [
    {value:1 , label:"Jacket",icon:"apps" ,  backgroundColor:'#e6c5d4' },
    {value:2 , label:"Saree" , icon:"lock" ,  backgroundColor:'#e6c5d4' },
    {value:3 , label:"Frocks" , icon:"email" ,  backgroundColor:'#e6c5d4' },
    {value:4 , label:"Skirts" , icon:"minimize",  backgroundColor:'#e6c5d4' },
    {value:5 , label:"Skirts" , icon:"minimize",  backgroundColor:'#e6c5d4' },
    {value:6 , label:"Skirts" , icon:"minimize",  backgroundColor:'#e6c5d4' }
];

function ListingEditDetails(props) {
    return (
        <Screen style={styles.screen}>
            <Image style={styles.image} source={require('../Assets/store.png')} />
            <AppForm
                initialValues={{title:"" ,price:"",description:"",category:null}}
                onSubmit={(values)=>console.log(values)}
                validationSchema={validationSchema}
                >
            <AppFormikFiled 
                placeholder='title'
                autoCapitalize='none'
                autoCorrect={false}
                name='title'
            />
             <AppFormikFiled 
                placeholder='price'
                keyboardType = 'numeric'
                autoCapitalize='none'
                autoCorrect={false}
                name='price'
            />
           <AppFormPicker
           placeholder="Category"
           name="category"
           items={categories}
           numColumns={3}
           PickerItemComponent={PickerItemCategory}
           />
            <AppFormikFiled 
                placeholder='description'
                autoCapitalize='none'
                autoCorrect={false}
                name='description'
                maxLength={225}
                numberOfLines={3}
            />
            <SubmitButton title="Post" />
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

export default ListingEditDetails;