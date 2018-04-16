// import * as gateway from './gateway'
// import * as user from './user'
import * as activity from './activity'
// import * as cash from './cash'
import * as core from './core'
// import * as message from './message'
// import * as bank from './bank'
// import * as home from './home.js'
// import * as other from './other'

// api返回结果，正确的状态
export const STATUS_OK = '000'
// api的根目录


const api = {
  STATUS_OK: STATUS_OK,
  // ...gateway,
  // ...user,
  ...activity,
  // ...cash,
  ...core,
  // ...message,
  // ...bank,
  // ...home,
  // ...other
}

export default api