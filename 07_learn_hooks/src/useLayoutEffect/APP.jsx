/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 07_learn_hooks/src/useLayoutEffect
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/4/1
 */
import React, {memo, useLayoutEffect} from 'react'

const APP = memo(() => {
    useLayoutEffect(() => {
    // 会在页面渲染之前执行 会阻塞页面渲染 和 useEffect 刚好相反
    }, [])
    return (
        <div>APP</div>
    )
})

export default APP