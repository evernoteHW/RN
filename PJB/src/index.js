import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './components/home'
import { StackNavigator, SwitchNavigator } from 'react-navigation';
import SignInScreen from './components/login/SignInScreen'
import AuthLoadingScreen from './components/login/AuthLoadingScreen'

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}


const AppStack = StackNavigator({ Home: HomeScreen, Other: SettingsScreen });
const AuthStack = StackNavigator({ SignIn: SignInScreen });



export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);