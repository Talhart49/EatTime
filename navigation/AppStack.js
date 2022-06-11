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
import ShopScreen from '../screens/ShopScreen';
import RecipesDestails from '../screens/RecipesDestails';
import LoginScreen from '../screens/LoginScreen';
import PasswordScreen from '../screens/PasswordScreen';
import PersonalinfoScreen from '../screens/PersonalinfoScreen';
import AddCardScreen from '../screens/AddCardScreen';
import SelectPayment from '../screens/SelectPayment';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          drawerActiveBackgroundColor: 'blue',
        }}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name=" " component={MainTabScreen} />
        <Drawer.Screen name="Cart" component={CartScreen} />
        <Drawer.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            title: 'Manage Payments',
          }}
        />
        <Drawer.Screen name="Support" component={SupportScreen} />
        <Drawer.Screen name="Shop" component={ShopScreen} />

        <Drawer.Screen
          name="Browse"
          component={RecipesDestails}
          options={{headerShown: false}}
        />

        <Drawer.Screen
          name="Password"
          component={PasswordScreen}
          options={{
            title: 'Change Password',
          }}
        />

        <Drawer.Screen
          name="Info"
          component={PersonalinfoScreen}
          options={{
            title: 'Edit Profile',
          }}
        />
        <Drawer.Screen
          name="NewCard"
          component={AddCardScreen}
          options={{
            title: 'Add New Card',
          }}
        />
        <Drawer.Screen
          name="SelectPayment"
          component={SelectPayment}
          options={{
            title: 'Select Payment Option',
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default AppStack;
