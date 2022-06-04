import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import MainTabScreen from '../screens/MainTabScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Settings from '../screens/Settings';
import Orders from '../screens/Orders';
import Recipes from '../screens/Recipes';

import React from 'react';
import DrawerContent from '../screens/DrawerContent';
import CartScreen from '../screens/CartScreen';
import PaymentScreen from '../screens/PaymentScreen';
import SupportScreen from '../screens/SupportScreen';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{headerTitleAlign: 'center'}}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name=" " component={MainTabScreen} />
        <Drawer.Screen name="Cart" component={CartScreen} />
        <Drawer.Screen name="Payment" component={PaymentScreen} />
        <Drawer.Screen name="Support" component={SupportScreen} />
      </Drawer.Navigator>
    </>
  );
};

export default AppStack;
