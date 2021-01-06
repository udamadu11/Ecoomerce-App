import React from 'react';
import { FlatList,StyleSheet,View } from 'react-native';
import ListItem from '../component/ListItem';
import Screen from '../component/Screen';
import SeperateItem from '../component/SeperateItem';
import color from '../config/color';

const message = [
    {
        id:"1",
        title:"Üdara madumalka",
        subtitle:"comments",
        image: require('../Assets/store.png')
    },
    {
        id:"2",
        title:"Üdara madumalka",
        subtitle:"comments",
        image : require('../Assets/store.png')
    },
    {
        id:"3",
        title:"Üdara madumalka",
        subtitle:"comments",
        image : require('../Assets/store.png')
    }
]

function MessageScreen(props) {
    return (
        <Screen>
            <FlatList 
             data = {message}
             keyExtractor={(message) => message.id.toString()}
             renderItem = {({item})=>
             <ListItem 
                 title={item.title}
                 subtitle ={item.subtitle}
                 image = {item.image}
                 onPress={() => console.log({item})}
                //  renderRightActions={()=> 
                //      <View
                //      Style={{
                //        backgroundColor: 'blue', justifyContent: 'center',width:100
                //      }}
                //      />
                // }
             /> }
             ItemSeparatorComponent={SeperateItem}
            
            />
        </Screen>
    );
}


export default MessageScreen;