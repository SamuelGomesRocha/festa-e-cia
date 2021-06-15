import React from 'react'
import { StyleSheet, View } from 'react-native'
import Routes from './src/routes'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { PIN } from './src/pages/PIN'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { CadastroProdutos } from './src/pages/CadastroProdutos'
import { CadastroCliente } from './src/pages/CadastroClientes'
import { StatusBar } from 'expo-status-bar';
import { ButtonMenu } from './src/components/ButtonMenu'
import { Home } from './src/pages/Home'
import MenuContent from './src/components/MenuContent'
import colors from './src/styles/colors'
import { createStackNavigator } from '@react-navigation/stack'



export default function App() {
  const x = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  const Drawer = createDrawerNavigator();
  return (


    <SafeAreaProvider>

      <NavigationContainer>



        <Drawer.Navigator
          drawerStyle={{
            backgroundColor: colors.background,
          }}

          drawerContentOptions={
            {
              activeBackgroundColor: colors.marromDaMassa,
              inactiveTintColor: colors.marromDaMassa,
              activeTintColor: 'white'
            }}

          screenOptions={{ headerShown: true, headerLeft: () => <ButtonMenu /> }}
          drawerContent={(props) => <MenuContent {...props} />}

        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Castro de Produtos" component={CadastroProdutos} />
          <Drawer.Screen name="Cadastro de Clientes" component={CadastroCliente} />
        </Drawer.Navigator>

      </NavigationContainer>

    </SafeAreaProvider>
  );
}
