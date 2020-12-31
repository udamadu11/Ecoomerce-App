import React from 'react';
import { Alert, Button, Image, ImageBackground , StyleSheet , Text ,View} from 'react-native';

function FrontScreen() {
    return (
       <ImageBackground source={require("../Assets/visa.jpg")} style={styles.background}>
           <View style={styles.view}>
            <Text style={styles.leftButton} onPress={()=>Alert.alert('clicked')}>Sign Up</Text>
            <Text style={styles.RightButton} onPress={()=>Alert.alert('clicked')}>Login</Text>
           </View>
           {/* <Button title="Sign Up" color="green" onPress={()=>Alert.alert('clicked')}/>
           <Button title="login" style={styles.loginButton} onPress={()=>Alert.alert('clicked')}/> */}
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
    leftButton:{
        width:150,
        padding:10,
        fontSize:18,
        textAlign:'center',
        backgroundColor:'green',
        height: 50,
        color:'white',
        bottom:10,
        marginLeft:20
    },
    RightButton:{
        width:150,
        padding:10,
        fontSize:18,
        textAlign:'center',
        backgroundColor:'#2a6fdb',
        height: 50,
        color:'white',
        bottom:10,
        marginRight:20
    },
    view:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default FrontScreen;