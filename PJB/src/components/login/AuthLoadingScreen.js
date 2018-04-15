import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  //  static navigationOptions = ({ navigation }) => {
  //     const params = navigation.state.params || {};
  //     const { headerColor } = params
  //     return { 
  //       // headerTransparent: true, 
  //       // headerStyle: {backgroundColor: headerColor, opacity: 1.0, borderBottomWidth:0,},
  //       headerLeft:(
  //                   <TouchableOpacity onPress={()=>navigation.goBack(null)}>
  //                     <Text> 123123</Text>
  //                   </TouchableOpacity>
  //                 )
  //     };
  // };
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View >
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}