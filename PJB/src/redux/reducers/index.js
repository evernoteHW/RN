import { combineReducers } from 'redux'

import * as coreReducers from './coreReducers'
import * as getewayReducers from './getewayReducers'
import * as activityReducers from './activityReducers'

const reducers = combineReducers({
    ...coreReducers,
    ...getewayReducers,
    ...activityReducers
});

export default reducers