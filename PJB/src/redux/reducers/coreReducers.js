import TYPES from '../types'

const initialState = {
	status: 'initial',
	products: []
}

export const productListReducer = (state=initialState, action) =>{
	switch (action.type) {
		case TYPES.CORE.PJB_PRODUCT_LIST_BEGGING:
		{
			return {
				...state,
				status: 'begging'
			}	
		}
		case TYPES.CORE.PJB_PRODUCT_LIST_SUCCEED:
		{
			return {
				...state,
				status: 'completed',
				products: action.response
			}	
		}
		case TYPES.CORE.PJB_PRODUCT_LIST_FAILED:
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


const appIndexPageInitialState = {
	appIndexPageData: {
		topBannerList: [],
    	topTopics: [],
    	monthReport: null,
    	newComerActivity: null,
    	announcement: null,
    	speciallyRecommend: null
	}

}

export const appIndexPageReducer = (state=appIndexPageInitialState, action) =>{
	switch (action.type) {
		case TYPES.CORE.PJB_APP_INDEX_PAGE_BEGGING:
		{
			state =  Object.assign({}, {
				...state,
				status: 'begging'
			})
			return state
		}
		case TYPES.CORE.PJB_APP_INDEX_PAGE_SUCCEED:
		{
			var appIndexPageData = {}
			action.res.mapList.map((item, idx)=> {
				switch(item.type) {
				case 1 || '1':
				{
					appIndexPageData.topTopics = item.topTopics
					break
				}
				case 2 || '2': 
				{
					appIndexPageData.monthReport = item.monthReport
					break
				}
				case 3 || '3': 
				{
					appIndexPageData.newComerActivity = item.newComerActivity
					break
				}
				case 4 || '4': 
				{
					appIndexPageData.announcement = item.announcement
					break
				}
				case 5 || '5':
				{
					appIndexPageData.speciallyRecommend = item.speciallyRecommend
					break
				}
					default: break
				}
			})
	      	appIndexPageData.topBannerList = action.res.topBannerList
		  	return { 
		  		...state, 
	      		status: 'completed',
	      		appIndexPageData: appIndexPageData
	      	}
		}
		case TYPES.CORE.PJB_APP_INDEX_PAGE_FAILED:
		{
			return Object.assign({}, { ...state, status: 'failed' })		
		}
		default: return state
	}	
};
