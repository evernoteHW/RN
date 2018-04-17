/**
 * 附件上传下载服务 pj-p2p-other
 */
import fecth from '../assets/utils/fecth'
import {APIROOT} from './index'
const perfix = 'pj-p2p-other' // api接口前缀

// 认证文件上传
export function uploadAuthorization () {
  return `${APIROOT}${perfix}/file/upload/authorization`
}

// 票据文件上传
export function uploadBill () {
  return `${APIROOT}${perfix}/file/upload/bill`
}

// 文件下载接口
export function downloadByFileid (fileid) {
  return `${APIROOT}${perfix}/file/download/${fileid}`
}

// ** 银行卡信息获取
export function getBankInfo (params) {
  return fecth.post(`${APIROOT}${perfix}/bank/swiftbankInfo`, params)
}

// 投资用户头像上传
export function headImage () {
  return `${APIROOT}${perfix}/file/upload/headImage`
}

// POST  借款合同信息
export function generateBorrowContract (params) {
  return fecth.post(`${APIROOT}${perfix}/borrowContract/generateBorrowContract`, params)
}

// /payCompany/getPOST  查询支付公司信息
export function getListPayCompany (params) {
  return fecth.post(`${APIROOT}${perfix}/payCompany/listPayCompany`, params)
}

// post 票票宝委托协议
export function borrowContract (params) {
  return fecth.post(`${APIROOT}${perfix}/borrowContract/generateEntrust`, params)
}

// post 票票宝借款合同信息/borrowContract/generatePpbBorrowContract
export function PpbBorrowContract (params) {
  return fecth.post(`${APIROOT}${perfix}/borrowContract/generatePpbBorrowContract`, params)
}

//  查询支付公司信息
export function quotaInfo (params) {
  return fecth.post(`${APIROOT}${perfix}/quotaInfo/bank`, params)
}
