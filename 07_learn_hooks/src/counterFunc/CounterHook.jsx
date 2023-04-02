/**
 * @name: CounterHook.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 07_learn_hooks/src/counterFunc
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/31
 */
import React,{ memo,useState} from 'react';
export function CounterHook(props) {
    // 不能在循环，条件或嵌套函数中调用 Hook
    const [counter,setCounter] = useState(0);
    return (
        <div>
            <h2>counter: {counter} </h2>
            <button onClick={event => setCounter(counter+100)}>+100</button>
            <button onClick={event => setCounter(counter-100)}>-100</button>
        </div>
    );
}
export default memo(CounterHook);