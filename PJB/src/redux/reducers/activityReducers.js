import TYPES from '../types'

const initialState = {
	headerDic: {}
}

export const bannerLoginPageOfBannerDetailOfAppReducer = (state=initialState, action) =>{
	switch (action.type) {
		case TYPES.ACTIVITY.PJB_BANNER_LOGIN_PAGE_OF_BANNER_DETAIL_OF_APP_BEGGING:
		{
			return Object.assign({}, state)	
		}
		case TYPES.ACTIVITY.PJB_BANNER_LOGIN_PAGE_OF_BANNER_DETAIL_OF_APP_SUCCEED:
		{
			return Object.assign({}, {
				...state,
				status: 'completed',
				headerDic: action.response
			})	
		}
		case TYPES.ACTIVITY.PJB_BANNER_LOGIN_PAGE_OF_BANNER_DETAIL_OF_APP_FAILED:
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
