import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import CadastroClientes from '../pages/CadastroClientes'
import { Home } from '../pages/Home'
import CustomDrawer from '../components/CustomDrawer'

const Drawer = createAppContainer(


    createDrawerNavigator({
        Home,
        CadastroClientes
    },
        {
            initialRouteName: 'Home',
            contentComponent: CustomDrawer
        }
    )


)

export default Drawer;