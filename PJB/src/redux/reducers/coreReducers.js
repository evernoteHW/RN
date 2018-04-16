import * as TYPES from '../actions/types'

const initialState = {
	status: 'initial',
	products: []
}

export const productListReducer = (state=initialState, action) =>{
	switch (action.type) {
		case TYPES.PJB_PRODUCT_LIST_BEGGING:
		{
			return {
				...state,
				status: 'begging'
			}	
		}
		case TYPES.PJB_PRODUCT_LIST_SUCCEED:
		{
			return {
				...state,
				status: 'completed',
				products: action.response
			}	
		}
		case TYPES.PJB_PRODUCT_LIST_FAILED:
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
