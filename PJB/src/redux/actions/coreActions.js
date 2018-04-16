import * as TYPES from './types'
import api from '../../network/api'

// ES6 写法
export const productListAction = (params) => {
	return dispatch => {
			dispatch({type: TYPES.PJB_PRODUCT_LIST_BEGGING})
		 	api.productList(params).then(response => {

      			dispatch({type: TYPES.PJB_PRODUCT_LIST_SUCCEED, response: response})
    		}).catch (error => {
      		alert(error)
      			dispatch({type: TYPES.PJB_PRODUCT_LIST_FAILED})
    		})
    	}
}
