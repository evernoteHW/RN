/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import RootStack from './src/router';
import store from './src/redux/store'

export default class App extends Component<Props> {
  render() {
    return (
    	<Provider store={store}>
      		<RootStack />
      	</Provider>	
    );
  }
}

