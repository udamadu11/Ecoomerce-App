import React from 'react';
import { Alert, Button, Image, ImageBackground , StyleSheet , Text} from 'react-native';

function FrontScreen() {
    return (
       <ImageBackground source={require("../Assets/visa.jpg")} style={styles.background}>
           <Button title="Sign Up" color="green" onPress={()=>Alert.alert('clicked')}/>
           <Button title="login" style={styles.loginButton} onPress={()=>Alert.alert('clicked')}/>
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
    },
    text:{
        color:'white',
        fontSize:16,
        alignSelf:'center',
        bottom:25,
    },
    loginButton:{
        color:'white'
    }
})

export default FrontScreen;