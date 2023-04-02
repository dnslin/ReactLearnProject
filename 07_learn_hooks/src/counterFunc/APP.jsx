/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 07_learn_hooks/src/counterFunc
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/31
 */


import React, { memo } from 'react'
import CounterClass from "./CounterClass";
import {CounterHook} from "./CounterHook";

const APP = memo(() => {
    return(
        <div>
            <h1>APP </h1>
            <CounterClass/>
            <CounterHook/>
        </div>
    )
})

export default APP