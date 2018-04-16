import React from 'react';
import { 
  TouchableOpacity 
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Text, View } from 'react-native';
import TabBarScreen from '../components/tabbar/TabBarScreen'
import SignInScreen from '../components/login/SignInScreen'
import AuthLoadingScreen from '../components/login/AuthLoadingScreen'
// import 

const SignInNavigationStack = StackNavigator(
  { 
    Root: { screen: SignInScreen,},
    AuthLoadingScreen: { screen: AuthLoadingScreen,},
  },
  {
    navigationOptions: ({ navigation }) => ({
      // headerLeft:(
      //     <TouchableOpacity style={styles.headerLeftWrapper} onPress={()=>navigation.goBack(null)}>
      //       <Image style={styles.headerLeftIcon} source={headerLeftIcon} overflow='visible'/>
      //     </TouchableOpacity>
      //   ),
      headerBackTitle: '',
      headerTintColor: 'white',
      headerStyle: {backgroundColor: '#e94d4e', borderBottomWidth: 0},
      statusBarStyle: 'light-content'
      // headerBackImage: (require('../resources/images/home/home_left_item_white_icon.png'))
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