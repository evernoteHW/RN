import * as TYPES from '../actions/types'

const initialState = {
	isLogin: false,
	user: {},
	status: null
}

export default function user(state=initialState, action){
	switch (action.type) {
		case PJB_LOGIN_BEGGING:
		{
			return {
				...state,
				status: 'begging'
			}	
		}
		case PJB_LOGIN_SUCCEED:
		{
			return {
				...state,
				status: 'complete'
			}	
		}
	}	
}