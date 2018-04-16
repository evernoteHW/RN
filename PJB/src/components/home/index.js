import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';

// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from '../../redux/actions/loginActions'

import api from '../../network/api';
import styles from './styles'
import { scare, deviceWidth, max, min } from '../../uiutils/Dimensions'

const productIcon = require('../../resources/images/home/home_top_hot_recommond_icon.png')
const headerLeftIcon = require('../../resources/images/home/home_left_item_white_icon.png')
const headerRightIcon = require('../../resources/images/home/home_right_item_white_icon.png')

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};
      const { headerColor } = params
      return { 
        headerTransparent: true, 
        headerStyle: {backgroundColor: headerColor, opacity: 1.0, borderBottomWidth:0,},
        headerLeft:(
                    <TouchableOpacity style={styles.headerLeftWrapper} onPress={()=>navigation.navigate('Login')}>
                      <Image style={styles.headerLeftIcon} source={headerLeftIcon} overflow='visible'/>
                    </TouchableOpacity>
                  ),
        headerRight:(
                    <TouchableOpacity style={styles.headerRightWrapper}>
                      <Image style={styles.headerRightIcon} source={headerRightIcon} overflow='visible'/>
                    </TouchableOpacity>
                  )
      };
  };
  constructor(props) {
    super(props);
    this.state = {
      topBannerList: [],
      topTopics: [],
      monthReport: null,
      newComerActivity: null,
      announcement: null,
      speciallyRecommend: null
    };
  };
  componentWillMount() {
    // console.log(navigation)
    // this.props.navigation.navigate('Login')
  }
  componentDidMount () {
    // this.props.navigation.goBack()
    // console.log('1====', this.props)
    this.appIndexPage()
    // setTimeout(()=>{
    //   // console.log('2====', this.props)
    //   // dispatch({'type': TYPES.PJB_LOGIN_SUCCEED, data: data})
    //   alert(333)
    //   this.props.navigation.goBack()
    // }, 4000);
    // alert(fetchApi)
  }
  _changeHeaderColor = (alpha=0.0)=> {
    const rgba = 'rgba(233,77,78,' + alpha + ')'
    this.props.navigation.setParams({ headerColor: rgba });
  }
  appIndexPage() {
    api.appIndexPage().then(res => {
      var topTopics = []
      var monthReport = null;
      var newComerActivity = null
      var announcement = null
      var speciallyRecommend = null
      res.mapList.map((item, idx)=> {
        switch(item.type) {
          case 1 || '1':
          {
            topTopics = item.topTopics
          }
          case 2 || '2': 
          {
            monthReport = item.monthReport
          }
          case 3 || '3': 
          {
            newComerActivity = item.newComerActivity
          }
          case 4 || '4': 
          {
            announcement = item.announcement
          }
          case 5 || '5':
          {
            speciallyRecommend = item.speciallyRecommend
          }
          default: break
        }
      })
      this.setState({
        topBannerList: res.topBannerList,
        topTopics: topTopics,
        monthReport: monthReport,
        newComerActivity: newComerActivity,
        announcement: announcement,
        speciallyRecommend: speciallyRecommend
      })
      // console.log('count---',res)
    }).catch (error => {
      alert(error)
    })
  }
  //
  _onScroll = (e) => {
    const { contentOffset } = e.nativeEvent
    if (contentOffset.y>5){
      var alpha = min(80, contentOffset.y)/80.0
      this._changeHeaderColor(alpha)
    } else {
      this._changeHeaderColor(0.0)
    }
  }
  // 轮播图
  bannerClock = (item) => {
    // alert(item)
    
  }
  // 三个介绍位
  topTopicClick = (item) => {
    alert(item)
    this.props.navigation.navigate('Login')
  }
  // 购买
  gotoBuyProduct = id => {
    alert(1)
  }
  render() {
    // 解构赋值
    const { topBannerList, topTopics, monthReport, newComerActivity, announcement, speciallyRecommend } = this.state;
    return (
      <ScrollView style = {styles.contentContainer} onScroll={this._onScroll} scrollEventThrottle={200}>
        {/*轮播图*/}
        {
          topBannerList.length > 0 
          ? <Swiper style={styles.topBannerWrapper} 
                    autoplay={topBannerList.length>0}
                    // dot={ <View style={styles.dotStyle} />}
                    dotColor={'#f1eeea'}
                    activeDotColor={'#e94d4e'}
                    // dotStyle={{marginTop: 40}}
                    // activeDotStyle={{marginTop: 40}}
            >
            {
              topBannerList.map((item, idx) => {
                return (
                    <TouchableOpacity style={styles.slide} key={idx} activeOpacity={1.0} onPress={(item) => this.bannerClock(idx)}>
                        <Image style={styles.topBannerItem} source={{uri: item.pictureImgUrl}} />
                    </TouchableOpacity>
                )
              })
            }
            </Swiper>
          : null  
        }
        
        {/*广告Tab*/}
        {
          topTopics.length > 0 
          ? <View style={styles.topTopicWrapper} >
            {
              topTopics.map((item, idx) => {
              return (
                  <TouchableOpacity style={styles.toppicItem} key={idx} onPress={()=>this.topTopicClick(idx)}> 
                    <Image style={styles.topBannerItem} source={{uri: item.topicImgUrl}}/>
                  </TouchableOpacity>
              )
            })
            }
            </View> 
          : null
        
        }
        
        {/*月报*/}
        {
          monthReport != null
          ?   <View style={styles.monthReportWrapper}>
                <Image style={styles.monthReportCurrent} 
                        source={{uri: monthReport.curReportImageUrl}} 
                />
                <Image style={styles.monthReportMore} 
                       source={{uri: monthReport.moreReportImageUrl}} 
                />
              </View>
          : null   
        }
        {/*新手才会出现*/}
        {
          newComerActivity != null
          ? <View style={styles.newCommerWrapper}>
              <Image style={styles.newCommerItem} 
                     source={{uri: newComerActivity.imgUrl}}
              />
            </View>
          : null
        }
        
        {/*公告*/}
        {
          announcement != null
          ? <View style={styles.noticeWrapper}>
                <Text style={styles.noticeText}>{announcement.announcementContent}</Text>
            </View>
          : null  
        }

        {/*产品*/}
        {
          speciallyRecommend != null
          ? <View style={styles.productWrapper}>
              <View style={styles.productTopWrapper}>
                <Image source={productIcon} style={styles.productIcon}/>
                <Text style={styles.productTitle}>热门产品推荐</Text>
              </View>
              <View style={styles.separatorLine}></View>
              <View style={styles.productCenterWrapper}>
                  <View style={styles.productSubTitleWrapper}>
                    <Text style={styles.productSubTitle}>{speciallyRecommend.planTitle}</Text>
                  </View>
                  <View style={styles.productSubTitleWrapper}>
                  </View>
              </View>
              
              <View style={styles.productItemWrapper}>
                <View style={styles.productCenterItem}> 
                    <Text style={styles.productIntrRate}>{speciallyRecommend.intrRate}%</Text>
                    <Text style={styles.productAssignDays}>{speciallyRecommend.assignDays}天</Text>
                </View>
              </View> 
              <View style={styles.productItemWrapper}>
                <View style={styles.productCenterItem}> 
                    <Text style={styles.productPercentTip}>年利率</Text>
                    <Text style={styles.productAssignTip}>锁定期</Text>
                </View>
              </View> 
              <View style={styles.separatorLineCenter}></View>
              <View style={styles.productBottomWrapper}>
                <TouchableOpacity
                    style={styles.productBuyButton}
                    activeOpacity={0.8}
                    onPress={this.gotoBuyProduct}> 
                  <Text style={styles.productBuyText}>立即出借</Text>
                </TouchableOpacity>
            </View>
          </View>
          : null  
        }
        
      </ScrollView>
    );
  }
};

function mapStateToProps(state, props) {
    return {
        loading: state.appIndexPageReducer.loading,
        data: state.appIndexPageReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(loginActions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
