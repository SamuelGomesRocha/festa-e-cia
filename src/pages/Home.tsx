import React from 'react'
import { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView
} from 'react-native'

import waterdrop from '../assets/waterdrop.png';


export function Home() {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.topComponent}>
                <Text style={styles.title}>Festa & Cia</Text>
            </View>

            <Image source={waterdrop} style={styles.image} />

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
        backgroundColor: '#D9A3A1',
        marginVertical: 26,
        maxHeight: 80
    },

    title: {
        fontSize: 28,
        marginTop: 26,
        paddingHorizontal: 20
    },

    image: {

    }

})
