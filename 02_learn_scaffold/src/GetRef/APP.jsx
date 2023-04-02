/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/GetRef
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/25
 */
import React, {PureComponent, createRef} from 'react';

export class APP extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
        // 创建ref对象
        this.myRef = createRef();
        this.el = null;
    }


    getNativeDOM() {
        // 1.在React中，使用ref属性来获取真实的DOM元素 (不推荐)
        // console.log(this.refs.why);
        // 2.在React中，提前创建ref对象，然后通过ref属性来获取真实的DOM元素 (推荐)
        // console.log(this.myRef.current);
        // 3.在React中，通过回调函数的方式来获取真实的DOM元素 (推荐)
        console.log(this.el);
    }

    render() {
        return (
            <div>
                {/*<h2 ref='why'>Hello Word</h2>*/}
                {/*<h2 ref={this.myRef}>Hello Word</h2>*/}
                <h2 ref={e => this.el = e}>Hello Word</h2>
                <button onClick={event => this.getNativeDOM()}>获取Dom</button>
            </div>
        );
    }
}

export default APP;