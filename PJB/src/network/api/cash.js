/**
 * 资金服务 pj-p2p-cash 充值/提现
 */
import fecth from '../assets/utils/fecth'
import {APIROOT} from './index'
const perfix = 'pj-p2p-cash'// api接口前缀

export function updateUserPassword (params) {
  return fecth.post(`${APIROOT}${perfix}/enterprise/password/update`, params)
}
