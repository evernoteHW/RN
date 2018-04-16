import * as TYPES from './types'
import api from '../../network/api'
// import 
const data = {
	headerIcon: 'https://www.pj.com'
}

export const appIndexPage = (userName: '', password: '', imageCode: '') => {
	return dispatch => {
			dispatch({type: TYPES.PJB_LOGIN_BEGGING})
		 	api.appIndexPage().then(res => {
      			dispatch({'type': TYPES.PJB_LOGIN_SUCCEED, data: data})
    		}).catch (error => {
      			dispatch({type: TYPES.PJB_LOGIN_FAILED})
    		})
    	}
}
