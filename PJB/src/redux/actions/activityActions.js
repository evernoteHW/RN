import TYPES from '../types'
import api from '../../network/api'

export const bannerLoginPageOfBannerDetailOfAppAction = (params) => {
	return dispatch => {
			dispatch({type: TYPES.ACTIVITY.PJB_BANNER_LOGIN_PAGE_OF_BANNER_DETAIL_OF_APP_BEGGING})
		 	api.bannerLoginPageOfBannerDetailOfApp(params).then(response => {
      			dispatch({'type': TYPES.ACTIVITY.PJB_BANNER_LOGIN_PAGE_OF_BANNER_DETAIL_OF_APP_SUCCEED, response: response})
    		}).catch (error => {
      			dispatch({type: TYPES.ACTIVITY.PJB_BANNER_LOGIN_PAGE_OF_BANNER_DETAIL_OF_APP_FAILED})
    		})
    	}
}
