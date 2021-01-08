import React, { useState } from 'react';
import {View,StyleSheet, Text, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import color from '../config/color';
import MaterialIcon from './MaterialIcon';
import PickerItem from './PickerItem';



function AppPicker({icon,items,onSelected,placeholder,selectedItem}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
    <>
    <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
       <View style={styles.container}>
           {icon && <MaterialIcon name={icon} size={50} iconColor={color.black}/>}
           <Text style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</Text>
           <MaterialIcon
            name="expand-more"
            size={50} 
            iconColor={color.black}/>
       </View>
    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType="slide">
        <Button title='close' onPress={()=>setModalVisible(false)} backgroundColor='white'/>
        <FlatList 
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({item})=><PickerItem 
            label = {item.label}
            onPress={()=>
                {
                    setModalVisible(false);
                    onSelected(item);
                }
            }
            />}
        />
    </Modal>
    </>
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
        flex:1,
        alignSelf:'center'

    }
})

export default AppPicker;