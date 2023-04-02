/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/GetRef
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/25
 */
import React, {PureComponent, createRef,forwardRef} from 'react';

// 可以传入ref 但是没有实例  高阶组件 进行转发
const HelloWorld = forwardRef(function Home(props, ref) {
        return (
            <div>
                {/*  相当于转发  把外面的ref 传进来 来绑定内部元素 */}
                <h2 ref={ref}>Home</h2>
            </div>
        );
    }
)

export class APP_DOM_Func extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
        this.myRef = createRef();
    }


    getNativeDOM() {
        console.log(this.myRef.current)
    }

    render() {
        return (
            <div>
                {/*  函数组件没有实例  但是可以绑定*/}
                <HelloWorld ref={this.myRef}/>
                <button onClick={event => this.getNativeDOM()}>获取Dom</button>
            </div>
        );
    }
}

export default APP_DOM_Func;