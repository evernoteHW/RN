import { fetchApi } from '../fetchApi'
const perfix = 'pj-p2p-core'

export function appIndexPage () {
  return fetchApi(`${perfix}/appFront/v1.0/appIndexPage`, {}, {headers: {'clientType': '4', 'referral': ''}})
}
