/**
 * @name: UseEffectPro.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 07_learn_hooks/src/useEffect
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/4/1
 */
import React, {memo, useEffect, useState} from 'react'

const UseEffectPro = memo(() => {
     const [counter] = useState(100);
    // 对 useEffect 进行性能优化 某些东西不需要每次都执行
    // 1. 传入第二个参数(传入数组)，只有当第二个参数发生变化时，才会执行 useEffect
    // 2. 传入第二个参数(传入空数组[])，只会在组件挂载时执行一次
    useEffect(() => {
        console.log('组件挂载时执行')
    }, [])
    // counter 发生变化时，才会执行 useEffect
    useEffect(() => {
        console.log('counter 发生变化时，才会执行 useEffect')
    }, [counter])
    return(
        <div>APP</div>
    )
})

export default UseEffectPro