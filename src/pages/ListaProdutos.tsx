import React from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import colors from '../styles/colors'

export function ListaProdutos() {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerComponents}>


            </View>

        </ScrollView>
    )

}



const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: colors.background

    },

    containerComponents: {
        flex: 1,
    }


})