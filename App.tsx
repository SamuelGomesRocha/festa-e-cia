import React from 'react'
import { StyleSheet, View } from 'react-native'
import Routes from './src/routes'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { NavigationContainer } from '@react-navigation/native'
import { StackRouter } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Menu } from './src/pages/Menu'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { CadastroProdutos } from './src/pages/CadastroProdutos'
import { CadastroCliente } from './src/pages/CadastroClientes'
import { CadastroLocacoes } from './src/pages/CadastroLocacoes'
import { StatusBar } from 'expo-status-bar';
import { ButtonMenu } from './src/components/ButtonMenu'
import { Home } from './src/pages/Home'
import MenuContent from './src/components/MenuContent'
import colors from './src/styles/colors'
import { PIN } from './src/pages/PIN'
import AppLoading from 'expo-app-loading';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.rosao,
    accent: colors.rosao,
  },
};


export default function App() {

  const Drawer = createDrawerNavigator();
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) return <AppLoading />

  return (
    <PaperProvider>
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
              }
            }
            screenOptions={{ headerShown: true, headerLeft: () => <ButtonMenu /> }}
            drawerContent={(props) => <MenuContent {...props} />}
          >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Cadastro de Locacoes" component={CadastroLocacoes} />
            <Drawer.Screen name="Cadastro de Produtos" component={CadastroProdutos} />
            <Drawer.Screen name="Cadastro de Clientes" component={CadastroCliente} />

          </Drawer.Navigator>
        </NavigationContainer>
        <StatusBar style='auto' />
      </SafeAreaProvider>
    </PaperProvider>

  );
}
