import React from 'react'
import { } from 'react-native'
import Routes from './src/routes'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Menu } from './src/pages/Menu'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { CadastroProdutos } from './src/pages/CadastroProdutos'
import { CadastroCliente } from './src/pages/CadastroClientes'
import { StatusBar } from 'expo-status-bar';
import { ButtonMenu } from './src/components/ButtonMenu'
import { Home } from './src/pages/Home'
import MenuContent from './src/components/MenuContent'



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
          screenOptions={{ headerShown: true, headerLeft: () => <ButtonMenu /> }}
          drawerContent={(props) => <MenuContent {...props} />}
        >
          <Drawer.Screen name="Castro de Produtos" component={CadastroProdutos} />
          <Drawer.Screen name="Cadastro de Clientes" component={CadastroCliente} />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </SafeAreaProvider>

    //  <Routes />
  );
}
