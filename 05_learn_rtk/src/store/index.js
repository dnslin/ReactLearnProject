/**
 * @name: index.js
 * @projectName: ReactProject
 * @description:
 * @dirPath: 05_learn_rtk/src/store
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/30
 */
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./features/counter";
import homeReducer from "./features/home";
const store = configureStore({
    reducer: {
        counter: counterReducer,
        home: homeReducer
    },
    // 可以用来添加中间件
    // middleware
    // 是否开启开发者工具 默认为true
    // devTools: process.env.NODE_ENV !== 'production'
})

// 对每次派发的action进行拦截 用来打印日志 利用 monkey patching  重写dispatch方法
function log(store){
    const next = store.dispatch
    function logDispatch(action){
        console.log('dispatching', action)
        next(action)
        console.log('next state', store.getState())
    }
    store.dispatch = logDispatch
}
log(store)


// const log = store => (next) => (action) => {
//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result
// };
export default store