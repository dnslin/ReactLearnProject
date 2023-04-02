/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 07_learn_hooks/src/useReducer
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/4/1
 */
import React, {memo, useState} from 'react'
//  没什么用 仅仅是为了演示 useReducer
// useReducer 用于复杂的状态管理 例如：多个状态值的组合
// useReducer 与 useState 的区别
// 1. useState 是使用 useReducer 实现的
// 2. useState 的 dispatch 是自动的，而 useReducer 需要手动 dispatch
const APP = memo(() => {
    const [count, setCount] = useState();
    return (
        <div>APP</div>
    )
})

export default APP