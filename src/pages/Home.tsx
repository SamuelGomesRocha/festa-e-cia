import React from 'react'
import { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView
} from 'react-native'

import mainIcon from '../assets/mainIcon.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { ButtonMenu } from '../components/ButtonMenu'
import { useNavigation } from '@react-navigation/core';



export function Home() {

    const navigation = useNavigation();

    function handleMenu() {
        navigation.navigate('Menu')
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.topComponent}>
                <ButtonMenu />
                <Text style={styles.title}>Home</Text>
            </View>


            <Image source={mainIcon} style={styles.image} />

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
        maxHeight: 80,
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

    image: {
        top: -300,
        left: 83,
        padding: 200,
        width: 200,
        height: 200,
        justifyContent: 'center',
        opacity: 0.6
    }

})
