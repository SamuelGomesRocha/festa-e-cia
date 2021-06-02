import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,

} from 'react-native'

import colors from '../styles/colors'
import { EvilIcons, Feather } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';


export function ButtonMenu() {

    const navigation = useNavigation();
    const openDrawer = useCallback(() => {
        navigation.dispatch(DrawerActions.openDrawer());
    }, []);

  return (
    <TouchableOpacity style={styles.container} >
      <Text style={styles.text}>
        <EvilIcons name='navicon' size={20} onPress={openDrawer} />
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 0,
        color: colors.rosao,
    }
})
