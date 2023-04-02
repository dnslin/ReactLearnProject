/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 07_learn_hooks/src/useMomo
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/4/1
 */
import React, {memo, useMemo} from 'react'

const APP = memo(() => {
    let count = 0
    // useMemo 的返回值如果 不发生变化 则不会重新渲染
    // useCallback 是对函数做缓存 useMemo 是对值做缓存 用法类似 useMemo直接拿返回值使用
    const result = useMemo(() => {
        count++
    }, [count])


    return (
        <div>APP</div>
    )
})

export default APP