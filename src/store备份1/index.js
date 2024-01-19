import { createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
// import { log, thunk, applyMiddleware } from './middleware';
// applyMiddleware应用中间件

import thunk from 'redux-thunk'

// 开发环境开启 生产环境关闭
// redux-devtools
// trace: true： 看调用栈  调试一些源码
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))


// 正常情况选下store.dispatch(object)只能派发对象
// 想要派发函数 store.dispatch(function)


// thunk(store)
// log(store)

// applyMiddleware(store, log, thunk)

export default store