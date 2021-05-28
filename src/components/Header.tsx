import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ButtonMenu } from '../components/ButtonMenu'
import { useNavigation } from '@react-navigation/core'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface HeaderProps{
	title: string
}

export function Header({title}:HeaderProps){
	return(
		<View style={styles.container}>
			<ButtonMenu/>
			<Text style={styles.titulo}>
					{title}
	</Text>
	</View>
	)
}


const styles = StyleSheet.create({
	container: {
			flex: 1,
			flexDirection: 'row',
			alignItems:'center',
			justifyContent: 'space-between',
			backgroundColor: colors.rosao,
			maxHeight: 70,
			paddingLeft:8,
			paddingRight:8
	},
	titulo: {
			flex: 1,
			color: colors.background,
			fontSize: 20,
			fontFamily: fonts.heading,
			marginLeft: 'auto',
			marginRight: 'auto',
			textAlign: 'center'
	}
})