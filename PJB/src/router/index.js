import React from 'react';
import { StackNavigator } from 'react-navigation'
import { Text, View } from 'react-native';
import TabBarScreen from '../components/tabbar/TabBarScreen'
import SignInScreen from '../components/login/SignInScreen'


const SignInNavigationStack = StackNavigator(
  { 
    Root: { screen: SignInScreen,},
  }
);

const RootStack = StackNavigator(
  {
    Main: {
      screen: TabBarScreen,
    },
    Login: {
      screen: SignInNavigationStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default RootStack;