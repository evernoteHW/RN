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
import actions from '../../redux/actions'

import CustomButton from '../commonComponents/customButton'

const userNameIcon = require('../../resources/images/login/login_username_icon.png')
const pwdIcon = require('../../resources/images/login/login_pwd_icon.png')
const imageCodeIcon = require('../../resources/images/login/login_image_code_icon.png')

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
    }
    componentDidMount() {
      const { bannerLoginPageOfBannerDetailOfAppAction } = this.props
      bannerLoginPageOfBannerDetailOfAppAction()
    }
  	render() {
        const { headerDic } = this.props
    	return (
      		<ScrollView>
            <View style={styles.advertWrapper}> 
              <Image   style={styles.headerPic} source={{uri: headerDic.picaddr}}/>
            </View>
            <View style={styles.textInputrapper}> 
              <Image style={styles.leftIconView} source={userNameIcon}/>
              <TextInput style={styles.textInput} placeholder={'输入手机号/用户名/邮箱'}/>
              <View style={styles.marginRight} />
            </View>
            <View style={styles.separatorLine}></View>
            <View style={styles.textInputrapper}> 
              <Image style={styles.leftIconView} source={pwdIcon}/>
              <TextInput style={styles.textInput} placeholder={'请输入密码'}/>
              <View style={styles.marginRight} />
            </View>
            <View style={styles.separatorLine}></View>
            <View style={styles.textInputrapper}> 
              <Image style={styles.leftIconView} source={imageCodeIcon}/>
                <TextInput style={styles.textInput} placeholder={'算一算'}/>
              <View style={styles.marginRight} />
            </View>
            <View style={styles.separatorLine}></View>
            <CustomButton
              style={styles.loginButton} 
              buttonTitle='登录'
              onPress={this.onPress}
            />
            <View style={styles.registerForgetPwdWrapper}>
              <TouchableOpacity>
                <Text style={styles.forgetPwd}>忘记密码</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text  style={styles.register}>立即注册</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.telPhone}>
              <Text>客服电话：400-188-9138</Text>
            </TouchableOpacity>

      		</ScrollView>
    );
  }
}

const mapStateToProps = (state, props) => {
    return {
        status: state.bannerLoginPageOfBannerDetailOfAppReducer.status,
        headerDic: state.bannerLoginPageOfBannerDetailOfAppReducer.headerDic
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions.activityActions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);

const styles = StyleSheet.create({
  advertWrapper: {
    // flex: 1,
    width: '100%',
    // backgroundColor: 'orange',
    height: 72,
  },
  headerPic: {
    flex: 1,
    // backgroundColor: 'yellow'
  },
  textInputrapper: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 17.5,
  },
  
  leftIconView: {
    width: 20,
    height: 20,
    marginRight: 14,
    // backgroundColor: 'gray'
  },
  textInput:{
    flex: 1,
    height: 55,
    // width: 100,
    // flexGrow: 1,
    // marginRight: 30,
    // backgroundColor: 'green'
  },
  marginRight: {
    width: 30,
    height: 30,
    // backgroundColor: 'gray'
  },
  loginButton: {
    marginLeft: 17.5,
    marginRight: 17.5,
    marginTop: 20,
    height: 35,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e94d4e',
    marginBottom: 20
  },
  registerForgetPwdWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  register: {
    color: '#6d6261'
  },
  forgetPwd: {
    marginRight: 30,
    color: '#6d6261'
  },
  telPhone: {
    alignSelf: 'flex-end'
  },
  separatorLine: {
    height: 1,
    backgroundColor: '#f8f6f3'
  },
})

