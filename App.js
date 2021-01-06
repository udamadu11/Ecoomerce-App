import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Card from './App/component/Card';
import FrontScreen from './App/Screens/FrontScreen';
import ListingDetailsIcon from './App/Screens/ListingDetailsIcon';
import MessageScreen from './App/Screens/MessageScreen';
import ViewImageScreen from './App/Screens/ViewImageScreen';

export default class App extends Component {

   render() {
     return <MessageScreen />
   }
}
