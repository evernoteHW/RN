import * as TYPES from './types'
import api from '../../network/api'

// ES6 写法
export const bannerLoginPageOfBannerDetailOfAppAction = (params) => {
	return dispatch => {
			dispatch({type: TYPES.PJB_BANNER_LOGIN_PAGE_OF_BANNER_DETAIL_OF_APP_BEGGING})
		 	api.bannerLoginPageOfBannerDetailOfApp(params).then(response => {
      			dispatch({'type': TYPES.PJB_BANNER_LOGIN_PAGE_OF_BANNER_DETAIL_OF_APP_SUCCEED, response: response})
    		}).catch (error => {
      			dispatch({type: TYPES.PJB_BANNER_LOGIN_PAGE_OF_BANNER_DETAIL_OF_APP_FAILED})
    		})
    	}
}
