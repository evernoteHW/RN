import React from 'react';
import { BASE_API_URL } from '../../network/fetchApi'
import { 
	Image,
	StyleSheet,
	TouchableOpacity,
	Text
} from 'react-native';

export default class ImageCodeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timestamp: '' };
  }
  _onPress = ()=> {
  	var timestamp = Date.parse(new Date());
  	this.setState({timestamp: timestamp})
  }
  render() {
  	const { timestamp } = this.state
    return (
      	<TouchableOpacity activeOpacity={0.8} {...this.props} onPress={this._onPress}>
			<Image style={styles.imageCodeIcon} source={{uri: `${BASE_API_URL}/pj-p2p-user/imageCode/generate?${timestamp}`}}/>
	   	</TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
	imageCodeIcon: {
		width: 94,
    	height: 28,
	}
	
})
