/**
 * @name: actionCreators.js
 * @projectName: ReactProject
 * @description:
 * @dirPath: 03_learn_redux/src/store
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/28
 */
// 封装 action

// update_name 可以提前到另外一个 js 定义为常量
const changeAction = name => ({
    type: 'update_name',
    name
})
module.exports = {
    changeAction
}