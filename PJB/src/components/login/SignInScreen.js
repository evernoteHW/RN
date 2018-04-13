import React from 'react';
import {
	View,
	Button,
  Text
} from 'react-native';

export default class SignInScreen extends React.Component {
    static navigationOptions = {
      header: (<Text style={{backgroundColor: 'orange'}}> 12312312312312312312312</Text>), // !!! Hide Header,
      title: '1111'
    }
  	render() {
    	return (
      		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        		<Text style={{ fontSize: 30 }}>This is a modal!</Text>
        		<Button
          			onPress={() => {
                    this.props.navigation.goBack()
                    console.log(this.props)
                  }
                }
          		title="Dismiss"
          	/>
      		</View>
    );
  }
}

