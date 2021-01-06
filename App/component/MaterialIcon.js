import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
function MaterialIcon({
    name,
    size,
    backgroundColor,
    iconColor,
}) 
{
    return (
       <View style={{
           height: size,
           width: size,
           borderRadius: size /2,
           backgroundColor,
           justifyContent: 'center',
           alignItems: 'center'
       }}>
           <Icon 
            name={name}
            size = {size * 0.5}
            color={iconColor}
       />
       </View>
    );
}

export default MaterialIcon;