import React from 'react';
import { Image, Text, View , StyleSheet } from 'react-native';

function ListItem({title,subtitle,image}) {
    return (
        <View style={styles.container}>
            <Image source={image}  style={styles.imageStyle}/>
            <View>
                <Text style={styles.titleStyle}>{title}</Text>
                <Text style={styles.subtitleStyle}>{subtitle}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    }
    ,imageStyle:{
        width:70,
        height:70,
        borderRadius: 10,
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