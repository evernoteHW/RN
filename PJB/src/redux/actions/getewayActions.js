import * as TYPES from './types'
import api from '../../network/api'
// import 

export const appLoginAction = (userName: '', password: '', imageCode: '') => {
	return dispatch => {
			dispatch({type: TYPES.PJB_LOGIN_BEGGING})
		 	api.login({username: userName, password: password, imageCode: imageCode, clientType: 'IOS'})
		 	   .then(res => dispatch({'type': TYPES.PJB_LOGIN_SUCCEED, res: res}))
		 	   .catch (error => dispatch({type: TYPES.PJB_LOGIN_FAILED}))
    	}
}
