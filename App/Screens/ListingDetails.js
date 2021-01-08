import React from 'react';
import { FlatList,StyleSheet } from 'react-native';
import Card from '../component/Card';
import Screen from '../component/Screen';
const listings = [
    {
        id:1,
        title: "Sell Lap for cash",
        price: 100,
        image:require('../Assets/store.png')
    },
    {
        id:2,
        title: "Sell Lap for cash",
        price: 100,
        image:require('../Assets/visa.jpg')
    },
    {
        id:3,
        title: "Sell Lap for cash",
        price: 100,
        image:require('../Assets/visa.jpg')
    }
]
function ListingDetails(props) {
    return (
       <Screen style={styles.screen}>
          <FlatList 
          data={listings}
          keyExtractor={listing => listing.id.toString()}
          renderItem = {({item})=>
            <Card 
                title={item.title}
                price={"$"+item.price}
                image={item.image}   
            />}
          />
       </Screen>
    );
}
const styles = StyleSheet.create({
    screen:{
        backgroundColor: '#EFF3F6',
        padding:5
    }
})
export default ListingDetails;