/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/SetStateOther
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/25
 */

import React, {Component} from 'react';

export class APP extends Component {

    constructor(props) {
        super(props);
        this.setState({
            messages: 'hello world',
            counter: 0
        })
    }

    changeText(){
        //  异步执行 合并到 setstate里
        // Object.assign()

        // 也可以拿到之前的 stat和 props 的值 例如做比较 做校验
        this.setState((state,props)=>{
            // 可以传入具体回调函数 编写对state的参数进行具体逻辑处理
            return {
                message: 'hello react'
            }
        })

        // 因为是异步执行 所以有先后顺序 可能setState 会慢点
        // 可以在state 传入一个回调函数去拿到最新的值
        this.setState({message:"hello react"},()=>{
            console.log('************',this.state.messages)
        })
        console.log('------------',this.state.messages)
    }

    // 为什么setState是异步的 因为调用setState 就会调用 render函数 就会刷新dom 重新渲染
    // 所以一个方案就是 异步执行 当检测到多个更新的时候 批量进行更新 提高性能
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default APP;