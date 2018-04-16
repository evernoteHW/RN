import { fetchApi } from '../fetchApi'
const perfix = 'pj-p2p-activity'

// 登录页面广告位
export const bannerLoginPageOfBannerDetailOfApp = params => {
  return fetchApi(`${perfix}/banner/loginPageOfBannerDetailOfApp`, params)
}


// export function getExchangeCode (params) {
//   return fecth.post(`${APIROOT}${perfix}/activity/applyExchangeCodeAward`, params)
// }

// // 测试
// export function updateUserPasswords (params) {
//   return fecth.post(`${APIROOT}${perfix}/enterprise/password/update`, params)
// }

// // 新手分享活动
// export function getbtnstatus () {
//   return fecth.post(`${APIROOT}${perfix}/frontActivity/queryJuniorActivityAwardInfo`)
// }
// // 好友分享活动
// export function getinviatecode () {
//   return fecth.post(`${APIROOT}${perfix}/financial/planner/transition/info`)
// }
// // 合伙人活动奖励查询
// export function getPartnerAward (params) {
//   return fecth.post(`${APIROOT}${perfix}/financial/planner/queryPageRewardRecord`,params)
// }
// // 加息活动
// export function getFiveRateInfo () {
//   return fecth.post(`${APIROOT}${perfix}/frontActivity/queryFiveRaiseRateActivityInfo`)
// }
// // 加息活动查询奖励
// export function getaddrateaward () {
//   return fecth.post(`${APIROOT}${perfix}/frontActivity/queryFiveRaiseRateUserReward`)
// }

// // 疯狂加息活动时间查询
// export function getaddratetime () {
//   return fecth.post(`${APIROOT}${perfix}/frontActivity/queryFiveRaiseRateActTime`)
// }
