import React from 'react';
import { Text, View , StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/color';
function Button({title,color='blue',onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button,{backgroundColor:colors[color]}]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height: 50,
    },
    text:{
        color : "#fff",
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})

export default Button;