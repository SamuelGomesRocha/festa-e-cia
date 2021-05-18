import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    SafeAreaView,

} from 'react-native'
import fonts from '../styles/fonts'
import colors from '../styles/colors'
import { Button } from '../components/Button'
import { useNavigation } from '@react-navigation/core'


export function PIN() {

    const navigation = useNavigation();


    function handleSubmit() {
        navigation.navigate("Home")
    }



    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.content}>
                <View style={styles.form}>
                    <Text style={styles.heading}>
                        Insira seu PIN 😀
                    </Text>

                    <TextInput
                        placeholderTextColor="#fff"
                        maxLength={4}
                        autoCorrect={true}
                        style={styles.input}
                        placeholder="disponha os 4 digitos"
                        keyboardType="numeric"
                    />

                    <View style={styles.footer}>
                        <Button
                            title="Confirmar"
                            onPress={handleSubmit}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.background,
        justifyContent: 'space-around'
    },

    content: {
        flex: 1,
        width: '100%'
    },

    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',

    },

    heading: {
        fontFamily: fonts.heading,
        fontSize: 32,
        color: colors.rosao,
        alignItems: 'center'
    },


    input: {
        borderBottomWidth: 1,
        borderColor: 'white',
        color: colors.rosao,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'

    },
    footer: {
        width: '70%',
        marginTop: 40,
        paddingHorizontal: 20
    }

})