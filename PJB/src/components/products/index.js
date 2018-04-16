import React from 'react';
import { 
	View, 
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as coreActions from '../../redux/actions/coreActions'
import { getRandomColor } from '../../uiutils/Dimensions'
import CustomButton from '../commonComponents/customButton'

class ProductsScreen extends React.PureComponent {

  constructor(props) {
    super(props);
   
  }
  _keyExtractor = (item, index) => index
  componentDidMount() {
     this.props.productListAction({pageNo: 1, pageSize: 10})
  }
  _renderItem = ({item, index}) => (
	<View style={styles.flatListItem} key={index}>
		<View style={styles.itemHeader}> 
			<Text style={styles.headerTitle}>{item.planTitle}</Text>
		</View>
		<View style={styles.separatorLine}></View>
		<View style={styles.itemWrapper}> 
			<View style={styles.subItemWrapper}>
				<Text style={styles.intrRateStyle}>{item.intrRate}
					<Text style={{fontSize: 13}}>%</Text>
				</Text>
				<Text style={styles.intrRateTipStyle}>年利率</Text>
			</View>
			<View style={styles.subItemWrapper}>
				<Text style={[styles.intrRateStyle, styles.assignDaysStyle]}>{item.assignDays}
					<Text style={{fontSize: 13}}>天</Text>
				</Text>
				<Text style={styles.intrRateTipStyle}>锁定期</Text>
			</View>
			<View style={styles.subItemBuyWrapper}>
				<CustomButton buttonTitle='立即出借'/>
			</View>
		</View>
	</View>
  )
  _ItemSeparatorComponent = () => (
	<View style={styles.separatorItem}>
	</View>
  )
  render() {
  	const { products } = this.props
    return (
      	<FlatList
			data={products}
			renderItem={this._renderItem}
			ItemSeparatorComponent={this._ItemSeparatorComponent}
			keyExtractor={(item, index) => `${index}`}
		/>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        products: state.productListReducer.products
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(coreActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);

const styles = StyleSheet.create({
	flatListWrapper: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center', 
		backgroundColor: 'orange'
	},
	flatListItem: {
		backgroundColor: 'white'
	},
	separatorLine: {
		height: 1,
		backgroundColor: '#f8f6f3'
	},
	itemHeader: {
		height: 50,
		justifyContent: 'center',
		borderBottomRightRadius: 1,
	},
	headerTitle: {
		fontSize: 15,
		color: '#3a3434',
		marginLeft: 17.5
	},
	itemWrapper: {
	  flexDirection: 'row'
	},
	subItemWrapper: {
	  flex: 1,
	  height: 81,
	  alignItems: 'center',
	  justifyContent: 'center'
	},
	buyButton: {
		alignItems: 'center', 
		justifyContent: 'center',
		backgroundColor: '#e94d4e',
		height: 40
	},
	intrRateStyle: {
		color: '#e94d4e',
		fontSize: 22
	},
	intrRateTipStyle: {
		color: '#6d6261',
		fontSize: 13,
		marginTop: 16,
	},
	assignDaysStyle: {
		color: '#3a3434',
	},
	subItemBuyWrapper: {
	  flex: 1,
	  height: 80,
	  alignItems: 'center',
	  justifyContent: 'center'
	},
	separatorItem: {
		backgroundColor: '#f8f6f3', 
		height: 10
	}
})
