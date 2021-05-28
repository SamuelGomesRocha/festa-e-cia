import React from 'react';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import colors from '../styles/colors';


const MenuContent: React.FunctionComponent<DrawerContentComponentProps> = (
    props
) => {
    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: colors.rosao }}>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};
export default MenuContent;
