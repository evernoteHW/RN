import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class MineScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Mine Screen</Text>
      </View>
    );
  }
}
