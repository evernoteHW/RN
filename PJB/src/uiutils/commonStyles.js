
import { 
  StyleSheet,
} from 'react-native';

import { scare, deviceWidth, max, min } from '../../uiutils/Dimensions'

const styles = StyleSheet.create({
  button:{
    // flex: 1,
    width: '100%',
    height: scare(30.0),
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e94d4e',
  },
  text: {
    color: 'white'
  },
});
export default styles