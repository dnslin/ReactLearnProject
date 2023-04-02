/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 07_learn_hooks/src/useSelector
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/4/2
 */
import React, {memo} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {decrement, increment} from "./store/features/counterReducer";

const APP = memo(() => {
    // 只有 count 发生变化时，才会重新渲染 需要传入第二个参数 用于判断是否需要重新渲染
    // const count = useSelector(state => state.counter.count, (prev, next) => prev === next)
    // 也可以使用 shallowEqual 来判断是否需要重新渲染
    const {count} = useSelector(state => state.counter, shallowEqual)

    const dispatch = useDispatch()
    let changeNum = (num, flag) => {
        if (flag) {
            dispatch(increment(num))
        } else {
            dispatch(decrement(num))
        }
    }
    return (
        <div>
            <h1>APP: {count}</h1>
            <button onClick={() => changeNum(5, false)}>-5</button>
            <button onClick={() => changeNum(10, true)}>+10</button>
            <button onClick={() => changeNum(10, false)}>-10</button>
            <button onClick={() => changeNum(5, true)}>+5</button>
        </div>
    )
})

export default APP