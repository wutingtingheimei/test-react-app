import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
// applyMiddleware应用中间件
import homeReducer from './features/home'
import counterReducer from './features/counter'
import userReducer from './features/user'
import thunk from 'redux-thunk'

// 开发环境开启 生产环境关闭
// redux-devtools
// trace: true： 看调用栈  调试一些源码

// 将两个reducer合并在一起
const reducer = combineReducers({
  counter:counterReducer,
  home: homeReducer,
  user: userReducer
})


// combineReducers 实现原理(了解)
// function reducer (state = {}, action) {
// // 返回一个对象，store的state
//   return {
//     counter: counterReducer(state.counter, action),
//     home: homeReducer(state.home, action),
//     user: userReducer(state.user, action)
//   }
// }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))


// 正常情况选下store.dispatch(object)只能派发对象
// 想要派发函数 store.dispatch(function)




export default store


// Redux Toolkit：官方推荐编写redux逻辑的方法