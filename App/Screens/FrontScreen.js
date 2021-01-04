import React from 'react';
import { Alert, Image, ImageBackground , StyleSheet , Text ,View} from 'react-native';
import Button from '../component/Button';
function FrontScreen() {
    return (
       <ImageBackground 
        source={require("../Assets/visa.jpg")} 
        style={styles.background}>
           <View style={styles.buttonContainer}>
                <Button title='login' />
                <Button title='Sign Up' color='Green'/>
           </View>
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    text:{
        color:'white',
        fontSize:16,
        alignSelf:'center',
        bottom:25,
    },
    buttonContainer:{
        padding:20,
        width: '100%'
    },
    view:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default FrontScreen;