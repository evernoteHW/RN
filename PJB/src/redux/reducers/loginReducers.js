import * as TYPES from '../actions/types'
import { combineReducers } from 'redux'

const initialState = {
	isLogin: false,
	user: {},
	loginStatus: null
}

const dataReducer = (state=initialState, action) =>{
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
}

const rootReducer = combineReducers({
    dataReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})
 

export default rootReducer;