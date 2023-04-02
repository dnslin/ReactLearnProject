/**
 * @name: index.js
 * @projectName: ReactProject
 * @description:
 * @dirPath: 03_learn_redux/src/store
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/28
 */
// 老版使用的方法
const { createStore } = require('redux')

//  定义初始的 state
const initialState = {
    name: 'dnslin',
    age: 18
}

//  reducer 接收两个参数 一个是 state 一个是action
function reducer(state=initialState,action){
    if (action.type === 'update_name'){
        // 不侵犯原则  先拷贝再赋值
        return { ...state,name:action.name}
    }
    return state
}
//  创建 store
const store = createStore(reducer)

// 导出store
module.exports = store