import * as TYPES from './types'
import api from '../../network/api'

// ES6 写法
export const productListAction = (params) => {
	return dispatch => {
			dispatch({type: TYPES.PJB_PRODUCT_LIST_BEGGING})
		 	api.productList(params).then(response => {
      			dispatch({type: TYPES.PJB_PRODUCT_LIST_SUCCEED, response: response})
    		}).catch (error => {
      			dispatch({type: TYPES.PJB_PRODUCT_LIST_FAILED})
    		})
    	}
}

export const appIndexPageAction = () => {
	return dispatch => {
		dispatch({type: TYPES.PJB_APP_INDEX_PAGE_BEGGING})
	 	api
    .appIndexPage()
    .then(res => dispatch({'type': TYPES.PJB_APP_INDEX_PAGE_SUCCEED, res: res}))
    .catch (error => dispatch({type: TYPES.PJB_APP_INDEX_PAGE_FAILED}))
  }
}