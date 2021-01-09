import React from 'react';
import { StyleSheet, Text } from 'react-native';

function errorMessage({error,visible}) {
   if(!visible || !error) return null;
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