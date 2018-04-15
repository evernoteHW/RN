import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import loginReducer from '../reducers/loginReducers';
import thunk from 'redux-thunk';

const configureStore = preloadedState => {
    return createStore (
        loginReducer,
        preloadedState,
        // 应用中间件
        compose (
            applyMiddleware(thunk)
        )
    );
}

const store = configureStore();

export default store;