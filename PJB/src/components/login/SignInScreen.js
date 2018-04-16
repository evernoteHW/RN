import React from 'react';
import {
	View,
	Button,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from '../../redux/actions/loginActions'

class SignInScreen extends React.Component {
    // static navigationOptions = {
    //   header: (<Text style={{backgroundColor: 'orange'}}> 12312312312312312312312</Text>), // !!! Hide Header,
    //   title: '1111'
    // }
    constructor(props) {
      super(props);
      
      this.state = {};
      // this._dismiss = this._dismiss.bind(this)
    }
    _loginButton = ()=>{
      const { appIndexPage }  = this.props
      appIndexPage()
      // console.log(this.props)
      // this.props.navigation.goBack(null)
      // this.props.navigation.navigate('AuthLoadingScreen')
    }
    componentDidMount() {
      console.log('1111====', this.props)
    }
  	render() {
      const { loginStatus }  = this.props
    	return (

      		<ScrollView>
            <Text> {loginStatus} </Text>
            <View style={styles.advertWrapper}> 
              <Image />
            </View>
            <View style={styles.textInputrapper}> 
              <Image style={styles.leftIconView} />
              <TextInput style={styles.textInput} placeholder={'用户名'}/>
              <View style={styles.marginRight} />
            </View>
            <View style={styles.textInputrapper}> 
              <Image style={styles.leftIconView} />
              <TextInput style={styles.textInput} />
              <View style={styles.marginRight} />
            </View>
            <View style={styles.textInputrapper}> 
              <Image style={styles.leftIconView} />
                <TextInput style={styles.textInput} />
              <View style={styles.marginRight} />
            </View>
            <TouchableOpacity style={styles.loginButton} activeOpacity={0.8} onPress={()=> this._loginButton()}>
              <Text style={styles.buttonText}>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text>忘记密码</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text>立即注册</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text>客服电话：400-188-9138</Text>
            </TouchableOpacity>
      		</ScrollView>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        loginStatus: state.appIndexPageReducer.loginStatus,
        data: state.appIndexPageReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(loginActions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);

const styles = StyleSheet.create({
  advertWrapper: {
    // flex: 1,
    width: '100%',
    backgroundColor: 'orange',
    height: 50,
  },
  textInputrapper: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    flexDirection: 'row',
    // paddingRight: 30,
  },
  
  leftIconView: {
    width: 30,
    height: 30,
    backgroundColor: 'gray'
  },
  textInput:{
    flex: 1,
    height: 50,
    // width: 100,
    // flexGrow: 1,
    // marginRight: 30,
    backgroundColor: 'green'
  },
  marginRight: {
    width: 30,
    height: 30,
    backgroundColor: 'gray'
  },
  loginButton: {
    marginLeft: 17.5,
    marginRight: 17.5,
    height: 35,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e94d4e',
  },
  buttonText: {
    color: 'white'
  }
})

