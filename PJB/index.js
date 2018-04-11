import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
// console.disableYellowBox = false;
YellowBox.ignoreWarnings(['Warning: isMounted']);
YellowBox.ignoreWarnings(['Module RCTImageLoader']);

AppRegistry.registerComponent('PJB', () => App);
