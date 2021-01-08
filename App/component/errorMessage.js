import React from 'react';
import { StyleSheet, Text } from 'react-native';

function errorMessage({error}) {
    if(!error) return null;
    return (
       <Text style={styles.text}>{error}</Text>
    );
}
const styles = StyleSheet.create({
    text:{
        color:'red',
        padding:5
    }
})
export default errorMessage;