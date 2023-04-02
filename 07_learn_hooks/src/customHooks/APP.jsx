/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 07_learn_hooks/src/customHooks
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/4/1
 */
import React, {memo, useEffect, useState} from 'react'

// 自定义 hooks 必须 use 开头
function useLogger(name){
    useEffect(() => {
        console.log(`${name} mount`)
        return () => {
            console.log('unmount')
        }
    }, [name])
}


const Home = memo(() => {
    useLogger('Home')
    return(
        <div>APP</div>
    )
})

const About = memo(() => {
    useLogger('About')
    return(
        <div>About</div>
    )
})

const APP = memo(() => {
    const [show, setShow] = useState(true)
    useLogger('APP')
    return (
        <div>
            <button onClick={event => setShow(!show)}>切换</button>
            { show && <Home /> }
            { show && <About /> }
        </div>
    )
})

export default APP