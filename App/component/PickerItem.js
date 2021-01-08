import React from 'react';
import { TouchableOpacity, StyleSheet,Text } from 'react-native';

function PickerItem({label,onPress}) {
    return (
        <TouchableOpacity style={styles.touch} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>   
    );
}

const styles = StyleSheet.create({
    touch:{
       padding:10
    },
    text:{
        fontSize:18
    }
})
export default PickerItem;