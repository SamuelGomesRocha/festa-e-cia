import React from 'react';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import colors from '../styles/colors';

import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const MenuContent: React.FunctionComponent<DrawerContentComponentProps> = (
    props
) => {
    return (
        <SafeAreaView>
            <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
        </SafeAreaView>
    );
};
export default MenuContent;