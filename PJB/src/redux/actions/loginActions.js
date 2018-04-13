
import * as TYPES from './types'

export function login(opt) {
	return (dispatch) => {
		dispatch({'type': TYPES.PJB_LOGIN_FAILED})
		setTimeout(()=>{
			dispatch({'type': TYPES.PJB_LOGIN_SUCCEED})
		}, 1000);
	}
}