import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps

} from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export function ButtonText({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >

            <Text style={styles.text}>
                {title}
            </Text>

        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.rosaDiferenciado,
        height: 16,
        borderRadius: 16,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 18,
        color: colors.marromDaMassa,
        fontFamily: fonts.text
    }

});