import * as TYPES from './types'
import api from '../../network/api'

// ES6 写法
export const productListAction = (params) => {
	return dispatch => {
			dispatch({type: TYPES.PJB_LOGIN_BEGGING})
		 	api.productList(params).then(response => {
      			dispatch({'type': TYPES.PJB_LOGIN_SUCCEED, response: response})
    		}).catch (error => {
      		alert(error)
      			dispatch({type: TYPES.PJB_LOGIN_FAILED})
    		})
    	}
}
