import React from 'react';
import { View , Text, Image , StyleSheet } from 'react-native';
import  colors from '../config/color';

function Card({title,price,image}) {
    return (
      <View style={styles.container}>
          <Image source={image} style={styles.imageScreen} />
          <View style={styles.detailsContainer}>     
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.priceStyle}>{price}</Text>
          </View>
      </View>
    );
}
const styles = StyleSheet.create({
    container:{
        borderRadius: 15,
        backgroundColor: '#fff',
        marginBottom: 10,
        overflow: 'hidden',
    },
    detailsContainer:{
        padding:5
    },
    imageScreen:{
        width:'100%',
        height: 200,
    },
    titleStyle: {
        fontSize:18
    },
    priceStyle:{
        fontWeight: 'bold',
        fontSize: 20,
        color:colors.blue
    }
})
export default Card;