
import { 
  Dimensions
} from 'react-native';
export const deviceWidth = Dimensions.get('window').width; 
export const deviceHeight = Dimensions.get('window').height; 

export function scare(height) {
 return height * (deviceWidth / 375.0);
}

export const mainColor = "#e94d4e"

export function max(lhd, rhd) {
	return lhd >= rhd ? lhd : rhd
}
export function min(lhd, rhd) {
	return lhd <= rhd ? lhd : rhd
}