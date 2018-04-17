
import { 
  StyleSheet,
} from 'react-native';

import { scare, deviceWidth, max, min } from '../../uiutils/Dimensions'

const styles = StyleSheet.create({
  headerLeftWrapper: {
    // position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 44,
    left: 0,
    bottom: 0,
  },
  headerLeftIcon: {
    width: 22,
    height: 20,
  },
  headerRightWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange',
    width: 60,
    height: 44,
    left: 0,
    bottom: 0,
  },
  headerRightIcon: {
    width: 30,
    height: 25,
  },
  contentContainer: {
      backgroundColor: '#fff'
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
  },
  monthReportMore: {
    width: scare(170.0/2.0),
    backgroundColor: 'green',
  },
  newCommerWrapper: {
    height: scare(139.0/2.0)
  },
  newCommerItem: {
    flex: 1,
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
  },
  productTopWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: scare(50.0),
  },
  separatorLine: {
    backgroundColor: '#e5e5e5',
    height: 0.5,
  },
  separatorLineCenter: {
    position: 'absolute',
    left: deviceWidth/2.0,
    width: 0.5,
    top: scare(100.0),
    backgroundColor: '#e5e5e5',
    height: scare(50.0),
  },
  productCenterWrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  productItemWrapper: {
  },
  productCenterItem: {
    alignItems: 'baseline',
    marginLeft: 1,
    flexDirection: 'row',
    backgroundColor: 'white'
  },  
  productAssignDays: {
    flex: 1,
    marginLeft: 17.5,
  },
  productIntrRate: {
    flex: 1,
    color: '#e94e4e',
    fontSize: 17.5,
    marginLeft: 17.5,
  },
  productSubTitleWrapper: {
    flex: 1,
    justifyContent: 'center',
    height: scare(50.0),
    width: '100%',
  },
  productSubTitle: {
    marginLeft: 17.5
  },
 
  productPercentTip: {
    flex: 1,
    marginLeft: 17.5,
    marginTop: 11,
    fontSize: 13,
    color: '#6d6261'
  },
  productAssignTip: {
    flex: 1,
    marginTop: 11,
    fontSize: 13,
    color: '#6d6261',
    marginLeft: 17.5,
  },
  productBottomWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white'
  },
  productBuyButton:{
    // flex: 1,
    width: '100%',
    height: scare(30.0),
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e94d4e',
  },
  productBuyText: {
    color: 'white'
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
  dotStyle:{
    backgroundColor:'orange', 
    width: 8, 
    height: 8,
    borderRadius: 4, 
    marginLeft: 3, 
    marginRight: 3, 
    marginTop: 30, 
    // marginBottom: 3
  }
});
export default styles