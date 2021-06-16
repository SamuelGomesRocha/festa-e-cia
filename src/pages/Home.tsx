import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Button } from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Home() {
  return (
    <SafeAreaView style={styles.container}>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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