import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import loginReducer from '../reducers/loginReducers';
import reducers from '../reducers'
import thunk from 'redux-thunk';

const configureStore = preloadedState => {
    return createStore (
        reducers,
        preloadedState,
        // 应用中间件
        compose (
            applyMiddleware(thunk)
        )
    );
}

const store = configureStore();

export default store;