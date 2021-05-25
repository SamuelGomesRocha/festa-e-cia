import React from 'react'
import { } from 'react-native'
import Routes from './src/routes'
import SideBar from './src/routes'
import DrawerContent from './src/routes'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Menu } from './src/pages/Menu'
//import Drawer from './src/routes/drawer'

const Drawer = createDrawerNavigator();


export default function App() {
  const x = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Menu} />
      </Drawer.Navigator>
    </NavigationContainer>

    // <Routes />
  );
}
