import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'
import {ButtonMenu} from '../components/ButtonMenu'
import { useNavigation } from '@react-navigation/core'

 export function CadastroProdutos(){
    const navigation = useNavigation()
    function handleMenu(){
        navigation.navigate('Menu')
    } 
    
    return(
         <SafeAreaView style={styles.container}>
         <View style={styles.titulo}>
           <ButtonMenu 
           title= ''
           onPress= {handleMenu}
           /> 
            <Text style={styles.estiloTitulo}>
                Cadastro de Produtos 
            </Text>
         </View>
         </SafeAreaView>
     )



 }
    
 const styles = StyleSheet.create({
     container: { 
         flex : 1, 
         justifyContent : 'space-between', 
         backgroundColor: colors.background,  
     }, 
     titulo: {
         flex: 1, 
        flexDirection: 'row', 
        backgroundColor: colors.rosao,
        marginVertical: 26,
        maxHeight: 80,
     }, 
     estiloTitulo: {
        fontSize: 26,
        fontFamily: fonts.heading, 
        color: colors.background, 
        marginTop: 26, 
        paddingHorizontal: 20, 

     }


 })