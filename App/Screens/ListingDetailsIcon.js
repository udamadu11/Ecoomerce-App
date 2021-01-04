import React from 'react';
import { View,Text, Image ,StyleSheet } from 'react-native';
import ListItem from '../component/ListItem';
import colors from '../config/color';
function ListingDetailsIcon(props) {
    return (
        <View style={styles.container}>
          <Image source={require('../Assets/store.png')} style={styles.imageScreen} />
            <View style={styles.detailsContainer}>     
                <Text style={styles.titleStyle}>Jacket For Sale</Text>
                <Text style={styles.priceStyle}>100$</Text>
                <View style={styles.viewStyle}>
                    <ListItem 
                    title='Udara Madumlka'
                    subtitle = 'Comments'
                    image = {require('../Assets/shopping.png')}
                    />
                </View>
            </View>
      </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    detailsContainer:{
        padding:10
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
    },
    viewStyle:{
        marginVertical:20
    }
})
export default ListingDetailsIcon;