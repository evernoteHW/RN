import * as TYPES from '../actions/types'

const initialState = {
	isLogin: false,
	user: {},
	loginStatus: null,
	loading: false,
}

export const appIndexPageReducer = (state=initialState, action) =>{
	console.log('action===', action)
	switch (action.type) {
		case TYPES.PJB_LOGIN_BEGGING:
		{
			return {
				...state,
				loginStatus: 'begging'
			}	
		}
		case TYPES.PJB_LOGIN_SUCCEED:
		{
			return {
				...state,
				loginStatus: 'completed'
			}	
		}
		case TYPES.PJB_LOGIN_FAILED:
		{
			return {
				...state,
				loginStatus: 'failed'
			}	
		}
		default:
			return state
	}	
};
