import { combineReducers } from 'redux'

import * as coreReducers from './coreReducers'
import * as loginReducers from './loginReducers'
import * as activityReducers from './activityReducers'

const reducers = combineReducers({
    ...coreReducers,
    ...loginReducers,
    ...activityReducers
});

export default reducers