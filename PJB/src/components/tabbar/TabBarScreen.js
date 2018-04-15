import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native'
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';

import HomeScreen from '../home';
import ProductsScreen from '../products';
import MineScreen from '../mine';



const HomeNavigationStack = StackNavigator(
  { 
  	Root: { screen: HomeScreen,},
  },
  {
  	navigationOptions: ({ navigation }) => ({
  		title: '首页',
  		headerTintColor: 'white',
  		tabBarLabel: '首页',
  		tabBarIcon: ({ focused, tintColor }) => {
		    var iconName = focused 
		    ? require('../../resources/images/tabbar/tabbar_index_selected.png') 
		    : require('../../resources/images/tabbar/tabbar_index_default.png')
		    return (<View> 
	        			<Image source = {iconName} style = {styles.tabBarIcon} />
	        		</View>);
		    },
  	})
  }
);
const ProductsNavigationStack = StackNavigator(
  { 
  	Root: { screen: ProductsScreen,},
  },
  {
  	navigationOptions: ({ navigation }) => ({
  		title: '票据贷',
  		tabBarLabel: '产品',
  		headerTintColor: 'white',
  		headerStyle: {backgroundColor: '#e94d4e'},
  		tabBarIcon: ({ focused, tintColor }) => {
		    var iconName = focused 
		    ? require('../../resources/images/tabbar/tabbar_list_selected.png') 
		    : require('../../resources/images/tabbar/tabbar_list_default.png')
		    return (<View>  
		    			<Image source = {iconName} style = {styles.tabBarIcon} />
	        		</View>);
		    },
  	})
  }
);
const MineNavigationStack = StackNavigator(
  { 
  	Root: { screen: MineScreen,},
  },
  {
  	navigationOptions: ({ navigation }) => ({
  		tabBarLabel: '我的',
  		tabBarIcon: ({ focused, tintColor }) => {
		    var iconName = focused 
		    ? require('../../resources/images/tabbar/tabbar_mine_selected.png') 
		    : require('../../resources/images/tabbar/tabbar_mine_default.png')
		    return (<View> 
	        			<Image source = {iconName} style = {styles.tabBarIcon}/>
	        		</View>);
		    },
  	})
  }
);

export default TabNavigator (
	{
		Home: { screen: HomeNavigationStack},
		Products: { screen: ProductsNavigationStack},
		Mine: { screen: MineNavigationStack}
	},
	{
		navigationOptions: ({ navigation }) => ({}),
	    tabBarOptions: {
	      activeTintColor: '#e94d4e',
	      inactiveTintColor: 'gray',
	      labelStyle: {

	      }
	    },
	    tabBarComponent:  ({jumpToIndex, ...props, navigation}) => {
	    	return <TabBarBottom {...props}
	    				jumpToIndex={index => {
	    					if (index == 2) {
								navigation.navigate('Login')
	    					} else {
	    						jumpToIndex(index)
	    					}
	    				}}
	    		   />
	    },
	    tabBarPosition: 'bottom',
	    animationEnabled: false,
	    swipeEnabled: false,
	}
);

const styles = StyleSheet.create({
	tabbarLabel: {

	},
	tabBarIcon: {
		width: 84.0/3.0,
		height: 70.0/3.0,
		// backgroundColor: '#00ff00'
	},
});
