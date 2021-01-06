import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import colors from '../config/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
function ViewImageScreen(props) {
    return (
            <View style={styles.container}>
                <Icon name='close' size={50} color="#fff" style={styles.closeButton}/>
                <Icon name='delete' size={50} color="#fff" style={styles.deleteButton}/>
               
                <Image 
                    style = {styles.image}
                    source={require("../Assets/card.jpg")}
                    resizeMode="contain"
                />
            </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.black,
        flex:1
    },
    image:{
        width:"100%",
        height:"100%"
    },
    closeButton:{
        width:50,
        height: 50,
        left:10,
        top: 10,
    },
    deleteButton:{
        width:50,
        height: 50,
        right:10,
        top: 10,
        position:'absolute'
    }
})

export default ViewImageScreen;