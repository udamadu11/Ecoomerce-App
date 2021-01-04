import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import colors from '../config/color';
function ViewImageScreen(props) {
    return (
            <View style={styles.container}>
                <View style={styles.closeButton}></View>
                <View style={styles.deleteButton}></View>
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
        backgroundColor: colors.blue,
        left:10,
        top: 10,
    },
    deleteButton:{
        width:50,
        height: 50,
        backgroundColor: colors.red,
        right:10,
        top: 10,
        position:'absolute'
    }
})

export default ViewImageScreen;