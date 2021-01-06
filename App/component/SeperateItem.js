import React from 'react';
import { View,StyleSheet } from 'react-native';
import colors from '../config/color';
function SeperateItem() {
    return (
        <View style={styles.seperator} />
    );
}
const styles = StyleSheet.create({
    seperator:{
        width:'100%',
        backgroundColor: colors.Lavender,
        height : 1
    }
})
export default SeperateItem;