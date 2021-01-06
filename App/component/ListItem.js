import React from 'react';
import { Image, Text, View , StyleSheet, TouchableHighlight } from 'react-native';
import color from '../config/color';
import Swipeable from 'react-native-gesture-handler/Swipeable';
function ListItem({title,subtitle,image,onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                onPress={onPress} 
                underlayColor={color.Lavender}
                >
                <View style={styles.container}>
                    <Image source={image}  style={styles.imageStyle}/>
                    <View>
                        <Text style={styles.titleStyle}>{title}</Text>
                        <Text style={styles.subtitleStyle}>{subtitle}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:5
    }
    ,imageStyle:{
        width:70,
        height:70,
        borderRadius: 35,
        marginRight:10
    },
    titleStyle:{
        fontSize:18
    },
    subtitleStyle:{
        color: 'blue'
    }
})
export default ListItem;