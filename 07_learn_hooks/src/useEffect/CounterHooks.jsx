/**
 * @name: CounterHooks.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 07_learn_hooks/src/useEffect
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/4/1
 */
import React, {memo, useEffect} from 'react'

const CounterHooks = memo(() => {
    const [count, setCount] = React.useState(0);
    // 专门用来处理副作用的 例如：订阅、定时器、手动更改DOM 回调函数会在组件渲染到屏幕后自动执行
    // useEffect 可以存在多个 可以依次执行
    useEffect(() => {
        console.log('useEffect');
        document.title = count;
        // 返回一个函数，会在组件卸载前执行
        return () => {
            // 一般放一些清理工作 例如：取消订阅、清除定时器
            console.log('useEffect return');
        }
    }, [count]);
    return(
        <div>
            <h2>counter: {count} </h2>
            <button onClick={event => setCount(count+1)}>+1</button>
        </div>
    )
})
export default CounterHooks