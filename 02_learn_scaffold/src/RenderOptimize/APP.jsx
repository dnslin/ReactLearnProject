/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/RenderOptimize
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/25
 */

import React, { PureComponent } from 'react';
import Home from "./Home";
import Recommend from "./Recommend";
export class APP extends PureComponent {


    constructor(props) {
        super(props);
        this.state = {
            message: "hello world"
        }
    }

    // 如果没有更新那就别重新渲染  当前值 和 更新值 当前传递参数（props）

    // react 有自己的组件 Component PurComponent(可以解决这个问题) 但是对函数组件无效 函数组件 不继承  react { memo}
    // react { memo} 可以解决这个问题 用memo去包裹 函数式组件 然后导出就行了
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.message !== nextState.message;
    }

    click(){
        this.setState({
            message: "hello world"
        })
    }

    render() {
        console.log("APP render")
        const { message } = this.state;
        return (
            <div>
                <h2>{message}</h2>
                <button onClick={ e=> this.click() }>change Text</button>
                <Home/>
                <Recommend/>
            </div>
        );
    }
}

export default APP;