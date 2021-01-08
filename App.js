import React, { Component ,useState } from 'react';
import { View, Text } from 'react-native';
import AppPicker from './App/component/AppPicker';
import AppTextInput from './App/component/AppTextInput';
import Screen from './App/component/Screen';

const categories = [
  {label:"Footware" , value:1},
  {label:"Skirt" , value:2},
  {label:"Blouse" , value:3},
  {label:"Jacket" , value:4},
];
export default function App() {
  const [category, setCategory] = useState();
     return (
       <Screen>
         <AppTextInput placeholder="First Name" icon="supervisor-account"/>
         <AppPicker selectedItem={category} onSelected={item => setCategory(item)} items={categories} placeholder="Category" icon="apps"/>
         <AppTextInput placeholder="Email" icon="email"/>
       </Screen>
     )
}