import TYPES from '../types'

const initialState = {
	appLoginStatus: false
}

export const appLoginReducer = (state=initialState, action) =>{
	switch (action.type) {
		case TYPES.GETEWAY.PJB_LOGIN_BEGGING:
		{
			return Object.assign({}, {
				...state,
				appLoginStatus: false
			})	
		}
		case TYPES.GETEWAY.PJB_LOGIN_SUCCEED:
		{
			return Object.assign({}, {
				...state,
				status: 'completed',
				appLoginStatus: true
			})	
		}
		case TYPES.GETEWAY.PJB_LOGIN_FAILED:
		{
			return Object.assign({}, {
				...state,
				status: 'failed',
				appLoginStatus: false
			})	
		}
		default: return {...state}
	}	
};
