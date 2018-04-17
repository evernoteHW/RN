/**
 * 网关服务 pj-p2p-gateway pj-common这个是自定义的，因为gateway服务不需要加pj-p2p-gateway
 */
import { fetchApi } from '../fetchApi'

// 登录
export const login = (params) => {
  return fetchApi('/app/login', params)
}

// 登出
// export const logout () => {
//   return fetchApi.post(`${perfix}/logout`)
// }

/**
 * 理财系统/借款子系统
 * 个人注册 {
    borrowerType (integer): 借款人类型, 0 个人借款人, 1 企业借款人 ,
    cellphone (string): 手机号码 ,
    idnumber (string, optional),
    imageCode (string, optional): 图形验证码 ,
    messageCode (string, optional): 短信验证码 ,
    password (string): 密码 ,
    referee (integer, optional): 邀请号 ,
    registerClient (integer): 注册客户端 ,
    userType (integer): 用户类型, 0.投资者账户 1.借款人账户
 }
 */
// export const personSignup = (params) => {
//   return fetchApi.post(`${perfix}/person/signup`, params)
// }
