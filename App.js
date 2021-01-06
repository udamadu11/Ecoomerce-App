import React, { Component } from 'react';
import { View, Text } from 'react-native';


import Screen from './App/component/Screen';
import Icon from './App/component/MaterialIcon';
import ListItem from './App/component/ListItem';

export default class App extends Component {

   render() {
     return (
       <Screen>
          <ListItem 
            title="Udara"
            ImageComponent={<Icon 
              name="email"
              size={50}
              backgroundColor="red"
            />}
          />
       </Screen>
     )
       
     
   }
}
