import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import { PIN } from '../pages/PIN';
import { Home } from '../pages/Home';
import { Menu } from '../pages/Menu';
import { CadastroCliente } from '../pages/CadastroClientes';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (

    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.background
            },
        }}

    >

        <stackRoutes.Screen
            name="PIN"
            component={PIN}
        />

        <stackRoutes.Screen
            name="Home"
            component={Home}
        />

        <stackRoutes.Screen
            name="Menu"
            component={Menu}
        />

        <stackRoutes.Screen
            name="CadastroClientes"
            component={CadastroCliente}
        />

    </stackRoutes.Navigator>

)

export default AppRoutes;
