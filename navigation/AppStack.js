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

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <>
      <Drawer.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        <Drawer.Screen name="Orders" component={Orders} />
        <Drawer.Screen name="Recipes" component={Recipes} />

        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </>
  );
};

export default AppStack;
