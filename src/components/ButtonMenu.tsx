import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps

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
        <TouchableOpacity
            style={styles.container}
        >


            <Text style={styles.text}>
                <EvilIcons name='navicon' size={30} onPress={openDrawer} />
            </Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        height: 50,
        width: 50,
        borderRadius: 16,
        marginTop: 18,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {

        fontSize: 50,
        color: colors.rosao,

    }
})
