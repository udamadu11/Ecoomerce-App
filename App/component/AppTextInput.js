import React from 'react';
import { TextInput,View,StyleSheet } from 'react-native';
import color from '../config/color';
import MaterialIcon from './MaterialIcon';
import Screen from './Screen';

function AppTextInput({icon, ...otherProps}) {
    return (
       <View style={styles.container}>
           {icon && <MaterialIcon name={icon} size={50} iconColor={color.black}/>}
           <TextInput style={styles.text} {...otherProps} />
       </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#EFF3F6',
        flexDirection: 'row',
        borderRadius: 15,
        width:'100%',
        padding:5,
        marginVertical:5
    },
    text:{
        fontSize:18,

    }
})

export default AppTextInput;