import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps

} from 'react-native'

import colors from '../styles/colors'
import { EvilIcons,Feather } from '@expo/vector-icons'

interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export function ButtonMenu({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >

            <Text style={styles.text}>
            <EvilIcons name='navicon' size={30} />
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
