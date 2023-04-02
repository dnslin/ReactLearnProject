/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 07_learn_hooks/src/useRef
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/4/1
 */
import React, {memo, useCallback, useRef, useState} from 'react'

const APP = memo(() => {
    const [count, setCount] = useState(0);
    // useRef 每次都是返回同一个对象 用于保存数据
    const title = useRef()
    title.current = count

    useCallback(() => {
        // setCount(count + 1) 有闭包陷阱 每次都是使用的上一次的 count
        setCount(title.current + 1)  // 用ref来解决闭包陷阱
    }, [])

    return (
        <div>
            <h2>APP DOM { count }</h2>
            <button onClick={event => setCount(count + 1)}>+1</button>
        </div>
    )
})

export default APP