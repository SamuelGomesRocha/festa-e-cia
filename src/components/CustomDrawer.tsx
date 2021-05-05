import React from 'react'
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,

} from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export default function CustomDrawer({ ...props }) {

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.title}>Menu</Text>
            </View>


        </SafeAreaView>


    )


}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.rosaDiferenciado
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.cinzinha,
        marginVertical: 26,
        maxHeight: 80
    },
    title: {
        color: colors.rosaDiferenciado,
        fontSize: 24,
        fontFamily: fonts.heading
    },


})