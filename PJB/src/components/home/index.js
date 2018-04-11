import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};
      return {
        headerLeft: (
          <Button
            onPress={() => navigation.navigate('Login')}
            title="Info"
            color="#fff"
          />
        ),
        /* the rest of this config is unchanged */
      };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home2 Screen</Text>
      </View>
    );
  }
}
