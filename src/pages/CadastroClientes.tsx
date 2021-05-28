import React from 'react'
import { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView
} from 'react-native'


import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { ButtonMenu } from '../components/ButtonMenu'
import { useNavigation } from '@react-navigation/core';
import { TextInput } from 'react-native-gesture-handler';
import { Header } from '../components/Header';



export function CadastroCliente() {
    return (
        <SafeAreaView style={styles.container}>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#EFE3DC'
    },


    topComponent: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#D9A3A1',
        marginVertical: 26,
        maxHeight: 80
    },


    botao: {

    },

    title: {
        fontSize: 28,
        marginTop: 26,
        paddingHorizontal: 20,
        color: colors.background,
        fontFamily: fonts.heading
    },

    crud: {
        flex: 1,
        justifyContent: 'space-between'
    },

    nameTxtInput: {
        fontSize: 20,
        left: 10,
        color: colors.rosao
    },

    input: {
        borderBottomWidth: 1,
        borderColor: 'white',
        color: colors.rosao,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'left'
    }

})
