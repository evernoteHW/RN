import React from 'react';
import { 
  TouchableOpacity,
  Image
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Text, View } from 'react-native';
import TabBarScreen from '../components/tabbar/TabBarScreen'
import SignInScreen from '../components/login/SignInScreen'
import AuthLoadingScreen from '../components/login/AuthLoadingScreen'
import ForgetPwdScreen from '../components/login/ForgetPwdScreen'
import RegisterScreen from '../components/login/RegisterScreen'

// import 
const common_back_image = require('../resources/images/common/common_back_img.png');
const common_login_logo = require('../resources/images/common/common_login_logo.png');

const SignInNavigationStack = StackNavigator(
  { 
    Root: { screen: SignInScreen,},
    AuthLoadingScreen: { 
      screen: AuthLoadingScreen,
    },
    ForgetPwdScreen: {
      screen: ForgetPwdScreen
    },
    RegisterScreen: {
      screen: RegisterScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitle: (<Image source={common_login_logo}/>),
      headerBackTitle: '',
      headerTintColor: 'white',
      headerStyle: {backgroundColor: '#e94d4e', borderBottomWidth: 0},
      statusBarStyle: 'light-content',
      headerBackImage: (common_back_image)
    })
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