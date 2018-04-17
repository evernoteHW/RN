import * as TYPES from '../actions/types'

const initialState = {
	headerDic: {}
}

export const appLoginReducer = (state=initialState, action) =>{
	switch (action.type) {
		case TYPES.PJB_LOGIN_BEGGING:
		{
			return Object.assign({}, state)	
		}
		case TYPES.PJB_LOGIN_SUCCEED:
		{
			return Object.assign({}, {
				...state,
				status: 'completed',
				headerDic: action.response
			})	
		}
		case TYPES.PJB_LOGIN_FAILED:
		{
			return Object.assign({}, {
				...state,
				status: 'failed'
			})	
		}
		default:
			return state
	}	
};
