import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    Linking

} from 'react-native'

import { ButtonText } from '../components/ButtonText'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Menu() {

    const navigation = useNavigation()

    function handleCadCliente() {
        navigation.navigate('CadastroClientes')
    }
    function handleCadProdutos() {
        navigation.navigate('CadastroProdutos')
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.title}>Menu</Text>
            </View>

            <View style={styles.linkingContainer}>

                <ButtonText
                    title={"Cliente"}
                    onPress={handleCadCliente}
                />
                <ButtonText title={"Locação"} />
                <ButtonText 
                    title={"Produtos"}
                     onPress={handleCadProdutos}
                     />


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

    linkingContainer: {
        flex: 1,
        alignItems: 'center',
    },




})