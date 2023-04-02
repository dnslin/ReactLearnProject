/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 07_learn_hooks/src/useRef
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/4/1
 */
import React, {memo, useRef} from 'react'

const APP = memo(() => {
    // useRef 用于获取 DOM 元素
    const title = useRef()
    function showDOM(){
        // 保存在 current 属性中
        console.log(title.current)
    }
    return (
        <div>
            <h2 ref={title}>APP DOM</h2>
            <button onClick={showDOM}>查看dom节点</button>
        </div>
    )
})

export default APP