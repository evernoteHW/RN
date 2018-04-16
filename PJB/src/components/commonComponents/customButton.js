import React from 'react';
import { 
	View, 
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

const CustomButton = (props) => {
   	return (
   		<TouchableOpacity style={styles.buttonWrapper} activeOpacity={0.8} {...props}>
   			<Text style={styles.buttonTitle}>{props.buttonTitle}</Text>
   		</TouchableOpacity>
   	)
}
const styles = StyleSheet.create({
	buttonWrapper: {
		width: 100,
	  	alignItems: 'center', 
		justifyContent: 'center',
		backgroundColor: '#e94d4e',
		borderRadius: 6,
	},
	buttonTitle: {
		color: 'white',
		fontSize: 13,
		marginTop: 8,
		marginBottom: 8,
	}
	
})

export default CustomButton
