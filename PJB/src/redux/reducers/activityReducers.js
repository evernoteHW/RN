import * as TYPES from '../actions/types'

const initialState = {
	headerDic: {}
}

export const bannerLoginPageOfBannerDetailOfAppReducer = (state=initialState, action) =>{
	switch (action.type) {
		case TYPES.PJB_BANNER_LOGIN_PAGE_OF_BANNER_DETAIL_OF_APP_BEGGING:
		{
			return {
				...state,
				status: 'begging'
			}	
		}
		case TYPES.PJB_BANNER_LOGIN_PAGE_OF_BANNER_DETAIL_OF_APP_SUCCEED:
		{
			return {
				...state,
				status: 'completed',
				headerDic: action.response
			}	
		}
		case TYPES.PJB_BANNER_LOGIN_PAGE_OF_BANNER_DETAIL_OF_APP_FAILED:
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
