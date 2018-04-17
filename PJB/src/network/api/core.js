import { fetchApi } from '../fetchApi'
const perfix = 'pj-p2p-core'

export function appIndexPage () {
  return fetchApi(`${perfix}/appFront/v1.0/appIndexPage`, {}, {headers: {'clientType': '4', 'referral': ''}})
}

export const productList = params => {
  return fetchApi(`${perfix}/appFront/planProduct/planProductList`, params)
}



// /**
//  * 投融资服务 pj-p2p-core 投资/标的/票据
//  */
// import fecth from '../assets/utils/fecth'
// import {APIROOT} from './index'
// // api接口前缀
// const perfix = 'pj-p2p-core'

// export function updateUserPassword (params) {
//   return fecth.post(`${APIROOT}${perfix}/enterprise/password/update`, params)
// }

// // 查询新手标
// export function getnewhandBiao () {
//   return fecth.post(`${APIROOT}${perfix}/pcFront/planProduct/getPlanNewProduct`)
// }

// // 查询交易总额
// export function getinvestSum () {
//   return fecth.post(`${APIROOT}${perfix}/pcFront/homePage/investAllAmtSum`)
// }

// // 查询产品票据贷列表
// export function getPlanProductList () {
//   return fecth.post(`${APIROOT}${perfix}/appFront/planProduct/planProductList`)
// }

// // 查询产品债权转让列表
// export function getPlanAssignList (params) {
//   return fecth.post(`${APIROOT}${perfix}/appFront/assign/product/productAssignList`, params)
// }

// // 获取首页数据
// export function appIndexPage (params) {
//   return fecth.post(`${APIROOT}${perfix}/appFront/v1.0/appIndexPage`, params, {headers: {'clientType': '3', 'referral': ''}})
// }
