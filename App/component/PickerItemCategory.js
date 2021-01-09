import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import MaterialIcon from './MaterialIcon';

function PickerItemCategory({item ,onPress}) {
    return <View style={styles.container}>
        <MaterialIcon backgroundColor={item.backgroundColor} name={item.icon} size={70} />
        <Text style={styles.label}>{item.label}</Text>
    </View>;
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 25,
        paddingVertical: 15,
        alignItems:'center',
        width:"33%"
    },
    label:{
        padding:5,
        textAlign:'center'
    }
})
export default PickerItemCategory;