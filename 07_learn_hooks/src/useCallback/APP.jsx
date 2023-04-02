/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 07_learn_hooks/src/useCallback
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/4/1
 */
import React, {memo, useCallback} from 'react'

const APP = memo(() => {
    // useCallback 用于优化函数组件 例如：子组件的渲染
    // useCallback 有记录函数的功能 仅仅在依赖项发生变化时才会重新定义函数
    // 1. 优化函数组件
    // 2. 优化子组件的渲染
    // 3. 优化函数组件的性能
    // useCallback 的使用
    // 1. 引入 useCallback
    // 2. 定义函数
    // 3. 使用 useCallback 包裹函数
    // 4. 将 useCallback 返回的函数传递给子组件
    // useCallback
    useCallback(() => {}, [])
    return (
        <div>APP</div>
    )
})

export default APP