import { combineReducers } from 'redux'

import * as coreReducers from './coreReducers'
import * as loginReducers from './loginReducers'

const reducers = combineReducers({
    ...coreReducers,
    ...loginReducers
});

export default reducers