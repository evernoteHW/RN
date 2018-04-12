import React from 'react';
import { 
  View, 
  Text, 
  TouchableHighlight, 
  ScrollView, 
  StyleSheet,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';
import api from '../../network/api';

import { scare } from '../../uiutils/Dimensions'

const productIcon = require('../../resources/images/home/home_top_hot_recommond_icon.png')

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
      return { header: null };
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
  componentDidMount () {
    this.appIndexPage()
    // alert(fetchApi)
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
      console.log('count---',res)
    }).catch (error => {
      alert(error)
    })
  }
  render() {
    // 解构赋值
    const { topBannerList, topTopics, monthReport, newComerActivity, announcement, speciallyRecommend } = this.state;
    return (
      <ScrollView style = {styles.contentContainer}>
        {/*轮播图*/}
        {
          topBannerList.length > 0 
          ? <Swiper style={styles.topBannerWrapper} autoplay={topBannerList.length>0}>
            {
              topBannerList.map((item, idx) => {
                return (
                    <View style={styles.slide} key={idx}>
                      <Image style={styles.topBannerItem} source={{uri: item.pictureImgUrl}}/>
                    </View>
                )
              })
            }
            </Swiper>
          : null  
        }
        
        {/*广告Tab*/}
        {
          topTopics.length > 0 
          ? <View style={styles.topTopicWrapper}>
            {
              topTopics.map((item, idx) => {
              return (
                  <View style={styles.toppicItem} key={idx}>
                    <Image style={styles.topBannerItem} source={{uri: item.topicImgUrl}}/>
                  </View>
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
              <View style={styles.productCenterWrapper}>
                <View style={styles.productCenterItem}> 
                  <View style={styles.productSubTitleWrapper}>
                    <Text style={styles.productSubTitle}>{speciallyRecommend.planTitle}</Text>
                  </View>
                  <Text style={styles.productIntrRate}>{speciallyRecommend.intrRate}</Text>
                  <Text style={styles.productPercentTip}>年利率</Text>
                </View>
                <View style={styles.productCenterItem}> 
                  <View style={styles.productSubTitleWrapper}>
                  </View>
                  <Text>{speciallyRecommend.assignDays}天</Text>
                  <Text style={styles.productAssignTip}>锁定期</Text>
                </View>
              </View>
              <View style={styles.productBottomWrapper}>
                <TouchableHighlight
                    style={styles.productBuyButton}
                    onPress={()=>{
                      alert(1)
                    }}> 
                        <Text>立即出借</Text>
                </TouchableHighlight>
            </View>
          </View>
          : null  
        }
        
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'orange'
  },
  topBannerWrapper: {
    height: scare(375.0/2.0)
  },
  topBannerItem: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  topTopicWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexGrow: 1, // 平分
    height: scare(169.0/2.0)
  },
  toppicItem: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  monthReportWrapper: {
    height: scare(58.0/2.0),
    flexDirection: 'row',
  },
  monthReportCurrent: {
    flex: 1,
    backgroundColor: 'gray',
  },
  monthReportMore: {
    // flex: 1,
    width: scare(170.0/2.0),
    backgroundColor: 'green',
  },
  newCommerWrapper: {
    height: scare(139.0/2.0)
  },
  newCommerItem: {
    flex: 1,
    backgroundColor: 'gray',
  },
  noticeWrapper: {
    height: scare(45.0/2.0),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cccccc'
  },
  noticeText: {
    fontSize: 12,
    color: 'white',
  },
  productWrapper: {
    height: scare(451.0/2.0),
    backgroundColor: 'gray'
  },
  productTopWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: scare(50.0),
  },
  productCenterWrapper: {
    // flex: 1,
    height: scare(105.0),
    flexDirection: 'row',
    backgroundColor: 'green',
    // marginBottom: 1
    // flexGrow: 1,
  },
  productCenterItem: {
    flex: 1,
    backgroundColor: 'yellow',
    // width: '50%',
    
  },
  productSubTitleWrapper: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    height: scare(50.0),
    width: '100%',
    backgroundColor: 'blue'
  },
  productSubTitle: {
    marginLeft: 17.5
  },
  productIntrRate: {
    color: '#e94e4e',
    fontSize: 17.5,
    marginLeft: 17.5,
    backgroundColor: 'gray'
  },
  productPercentTip: {
    marginLeft: 17.5,
    marginTop: 11,
    backgroundColor: 'green'
  },
  productAssignTip: {
    marginTop: 11,
    backgroundColor: 'red',
  },
  productBottomWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  productBuyButton:{
    // flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#123456',
  },
  productIcon: {
    width: 52/2.0,
    height: 48/2.0
  },
  productTitle: {
    marginTop: 4,
    marginLeft: 7.5,
    color: '#6d6261',
    fontSize: 15
  },
});