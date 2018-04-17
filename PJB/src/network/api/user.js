
/**
 * 用户信息服务 pj-p2p-user
 */
import {APIROOT} from './index'
import { fetchApi } from '../fetchApi'
const perfix = 'pj-p2p-user' // api接口前缀

/**
 * POST 修改登陆密码POST /enterprise/password/update
 */
export function updateUserPassword (params) {
  return fecth.post(`${APIROOT}${perfix}/enterprise/password/update`, params)
}

// 获取图片验证码
export function getImageCode () {
  return `${APIROOT}${perfix}/imageCode/generate?` + new Date().getTime()
}

// 验证图片验证码接口
export function validImageCode (params) {
  return fecth.post(`${APIROOT}${perfix}/imageCode/check`, params.imageCode)
}

// 获取手机验证码
export function sendMobileCode (params) {
  return fecth.post(`${APIROOT}${perfix}/mobileCode/generate`, params)
}

// 验证手机验证码
export function validMobileCode (params) {
  return fecth.post(`${APIROOT}${perfix}/mobileCode/check`, params)
}

// 校验输入的登陆密码和身份证号是否正确
export function passwordAndIdnoVerify (params) {
  return fecth.post(`${APIROOT}${perfix}/person/passwordAndIdno/verify`, params)
}

// 发送验证邮件
export function emailVerification (params) {
  return fecth.post(`${APIROOT}${perfix}/emailVerification/sent`, params)
}

// 上传头像
export function personHeadImageSubmit (params) {
  return fecth.post(`${APIROOT}${perfix}/person/headImage/submit`, params)
}

/**
 * region-api : Region Api 开始
 ************************************************************************************
* */
// 获取开户银行列表
export function regionBankAll (params) {
  return fecth.post(`${APIROOT}${perfix}/region/bank/all`)
}

// 获取分行数据
export function regionBranchAllByZoneAndBank (params) {
  return fecth.post(`${APIROOT}${perfix}/region/branch/allByZoneAndBank`, params)
}

// 获取所有的省
export function regionProvinceAll (params) {
  return fecth.post(`${APIROOT}${perfix}/region/province/all`)
}

// 获取省份下面的市
export function regionCityAllByProvId (params) {
  return fecth.post(`${APIROOT}${perfix}/region/city/allByProvId`, params)
}

/**
 * region-api : Region Api 结束
 ************************************************************************************
* */

/**
 * 理财系统/借款子系统
 * 获取用户信息
 */
export function getPersonBaseInfo (params) {
  return fecth.post(`${APIROOT}${perfix}/person/baseInfo/get`, params)
}

// 判断账号是否已注册
export function personUsernameRegisted (params) {
  return fecth.post(`${APIROOT}${perfix}/person/person/username/registed`, params)
}

// 手机号重置登陆密码
export function personPassswordReset (params) {
  return fecth.post(`${APIROOT}${perfix}/person/password/reset`, params)
}
// 邮箱重置登陆密码
export function personPassswordResetByEmail (params) {
  return fecth.post(`${APIROOT}${perfix}/person/password/resetByEmail`, params)
}
// 统计当前注册用户总数, (传入参数为 账户类别 0.投资者账户 1.借款人账户)
export function personRegistedCount (params) {
  return fecth.post(`${APIROOT}${perfix}/person/registed/count`, params)
}

// 修改用户名
export function personUsernameUpdate (params) {
  return fecth.post(`${APIROOT}${perfix}/person/username/update`, params)
}

// 修改手机号
export function personMobileUpdate (params) {
  return fecth.post(`${APIROOT}${perfix}/person/mobile/update`, params)
}

// 修改登陆密码
export function personPasswordUpdate (params) {
  return fecth.post(`${APIROOT}${perfix}/person/password/update`, params)
}

// 校验邀请码或者电话号码是否正确
export function personVerifyMobileAndCode (params) {
  return fecth.post(`${APIROOT}${perfix}/person/verifyMobileAndCode`, params)
}

// 修改Email
export function personEmailUpdate (params) {
  return fecth.post(`${APIROOT}${perfix}/person/email/update`, params)
}
/**
 * evaluate-result-api : 测评信息 开始
 ************************************************************************************
* */
// 测评信息列表
export function userEvaluateList () {
  return fecth.post(`${APIROOT}${perfix}/user/evaluate/list`)
}

// 测评信息提交
export function userEvaluatesubmit (params) {
  return fecth.post(`${APIROOT}${perfix}/user/evaluate/submit`, params)
}
// 测评信息查询
export function getresults (params) {
  return fecth.get(`${APIROOT}${perfix}/results/${params}`)
}

/**
 * evaluate-result-api : 测评信息  结束
 ************************************************************************************
* */

/**
 * bank-operation-api  开始
 ************************************************************************************
* */
// POST  个人绑卡注册
export function shbdpstPersonalRegister (params) {
  return fecth.post(`${APIROOT}${perfix}/shbdpst/personal/register`, params)
}
// POST 激活会员账号
export function shbdpstActivate (params) {
  return fecth.post(`${APIROOT}${perfix}/shbdpst/activate/user`, params)
}
// POST 修改密码
export function shbdpstResetPassword (params) {
  return fecth.post(`${APIROOT}${perfix}/shbdpst/reset/password`, params)
}
// POST 个人换绑卡
export function shbdpstBindBankcard (params) {
  return fecth.post(`${APIROOT}${perfix}/shbdpst/personal/bind/bankcard`, params)
}

/**
 * bank-operation-api  结束
 ************************************************************************************
* */
/**
 * account-api 开始
 ************************************************************************************
* */

// 用户资金流水查询
export function personFundrecodrQuery (params) {
  return fecth.post(`${APIROOT}${perfix}/person/fundrecord/query`, params)
}

// 获取用户账户资金信息
export function personAccountInfo (params) {
  return fecth.post(`${APIROOT}${perfix}/person/account/get`, params)
}
/**
 * account-api 结束
 ************************************************************************************
* */

export function fet1 () {
  return fecth.post(`${APIROOT}${perfix}/loan/approval/operation/page`)
}
// 加息活动查询开通/激活存管人数
export function getOpenDepositSum () {
  return fecth.post(`${APIROOT}${perfix}/activity/queryOpenDepositSum`)
}
// 统计注册人数
export function getregisterCount (params) {
  return fecth.post(`${APIROOT}${perfix}/person/registed/count`, params)
}
