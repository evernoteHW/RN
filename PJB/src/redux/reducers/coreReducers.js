import * as TYPES from '../actions/types'

const initialState = {
	status: 'initial',
	products: []
}

export const productListReducer = (state=initialState, action) =>{
	switch (action.type) {
		case TYPES.PJB_LOGIN_BEGGING:
		{
			return {
				...state,
				status: 'begging'
			}	
		}
		case TYPES.PJB_LOGIN_SUCCEED:
		{
			return {
				...state,
				status: 'completed',
				products: action.response
			}	
		}
		case TYPES.PJB_LOGIN_FAILED:
		{
			return {
				...state,
				status: 'failed'
			}	
		}
		default:
			return state
	}	
};
