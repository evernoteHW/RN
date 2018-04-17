/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
	StatusBar
} from 'react-native'
import { Provider } from 'react-redux';

import RootStack from './src/router';
import store from './src/redux/store'

export default class App extends Component<Props> {
  componentWillMount(){
  	StatusBar.setBarStyle('light-content', true);
  }
  render() {
    return (
    	<Provider store={store}>
      		<RootStack />
      	</Provider>	
    );
  }
}

