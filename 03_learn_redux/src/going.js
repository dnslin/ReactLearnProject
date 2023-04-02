/**
 * @name: going.js
 * @projectName: ReactProject
 * @description:
 * @dirPath: 03_learn_redux/src
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/28
 */

const store = require('./store')
const { changeAction } = require('./store/actionCreators')
// 也可以封装 action

// 监听 state的 变化
const unsubscribe = store.subscribe(()=>{
    console.log("数据的变化",store.getState())
})

// 这样就可以拿到 store的值了
console.log(store.getState())

// 如果要修改就必须定义 action
//  对象 { type:action名称, 修改的变量名称： value}
const updateNameAction = {type:'update_name', name:'DnsLin'}
//  派发 action 给 reducer
store.dispatch(('wjy'))
console.log(store.getState())


