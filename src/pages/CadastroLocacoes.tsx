import React from "react";
import {SafeAreaView,View,StyleSheet,Text} from 'react-native' 

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { ButtonMenu } from "../components/ButtonMenu";
import { useNavigation } from "@react-navigation/core";

export function CadastroLocacoes() {
		const navigation = useNavigation()

			function handleMenu(){
			navigation.navigate('Menu')
		}

return(
<SafeAreaView style = {styles.container}>
	<View style = {styles.topComponent}>
		<ButtonMenu title="" onPress={handleMenu}/>
		<Text style = {styles.titulo}>
			Cadastro de Locações
		</Text>

	</View>
	<View style = {styles.crud}>
	<Text style = {styles.labelNome}>
			Nome:
		</Text>
	</View>
</SafeAreaView>
);

}

const styles = StyleSheet.create({

container:{
	flex: 1,
	backgroundColor: colors.background,
	justifyContent: 'space-between',
},

topComponent:{
	flex: 1,
	flexDirection: 'row',
	backgroundColor: colors.rosao,
	marginVertical: 26,
	maxHeight: 80,
},

titulo:{
fontSize: 26,
fontFamily: fonts.heading,
color: colors.background,
marginTop: 26,
paddingHorizontal: 20,
},

crud:{
	flex: 1,
	justifyContent: "space-between",


},

labelNome:{
	color: colors.rosao,
	fontSize: 20,
	paddingHorizontal: 20,
	marginTop: 10,

}


})
