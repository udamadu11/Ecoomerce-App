import React from 'react';
import { FlatList, StyleSheet,View } from 'react-native';
import ListItem from '../component/ListItem';
import MaterialIcon from '../component/MaterialIcon';
import Screen from '../component/Screen';
import SeperateItems from '../component/SeperateItem';
const data = [
    {
        title:"My Messages",
        MaterialIcon:{
            name:"announcement",
           
        }
    },
    {
        title:"My Listing",
        MaterialIcon:{
            name:"list",
           
        }
    },
    {
        title:"My Analytics",
        MaterialIcon:{
            name:"analytics",
           
        }
    }
    
];

function AccDetsils(props) {
    return (
        <View style={styles.screen}>
            <ListItem
                title="Udara"
                image={require("../Assets/store.png")}
                subtitle="User profile"
            />
            <View style={styles.viewDetails}>
             <FlatList
             data={data}
             keyExtractor={data => data.title}
             ItemSeparatorComponent = {SeperateItems} 
             renderItem={({item})=>
                <ListItem 
                title={item.title}
                ImageComponent={<MaterialIcon 
                name={item.MaterialIcon.name}
                size={60} 
                backgroundColor="#C3D8E8" 
                iconColor="black"
                />}
             />
             }
             />
            </View>
            <ListItem         
                title="Logout"
                ImageComponent={
                <MaterialIcon name='login' size={60} backgroundColor="#C3D8E8" iconColor="black" />}
            />

        
     </View>
   
    );
}
const styles = StyleSheet.create({
    viewDetails:{
        marginVertical: 20
    },
    screen:{
        backgroundColor:'#EFF3F6'
    }
})

export default AccDetsils;