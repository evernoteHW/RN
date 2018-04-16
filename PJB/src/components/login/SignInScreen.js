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
// import * as loginActions from '../../redux/actions/loginActions'
// import actions from '../../redux/actions'
import * as activityActions from '../../redux/actions/activityActions'

const userNameIcon = require('../../resources/images/login/login_username_icon.png')
const pwdIcon = require('../../resources/images/login/login_pwd_icon.png')
const imageCodeIcon = require('../../resources/images/login/login_image_code_icon.png')

// login_image_code_icon@2x.png
// login_image_code_icon@3x.png
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

const mapStateToProps = (state, props) => {
    return {
        status: state.bannerLoginPageOfBannerDetailOfAppReducer.status,
        headerDic: state.bannerLoginPageOfBannerDetailOfAppReducer.headerDic
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(activityActions, dispatch);
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
    height: 35,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e94d4e',
  },
  buttonText: {
    color: 'white'
  },
  separatorLine: {
    height: 1,
    backgroundColor: '#f8f6f3'
  },
})

