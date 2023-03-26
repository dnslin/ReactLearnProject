/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/ControlledComponents
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/25
 */
import React, {PureComponent} from 'react';

export class APP extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: 'dnslin'
        }
    }


    listenChange(event) {
        // 获取输入框的值
        this.setState({
            name: event.target.value
        })
    }

    render() {
        const {name} = this.state;
        return (
            <div>
                {/*  1. 如果onChange事件去掉就无法输入 value值会被绑定  */}
                {/*  2. onChange事件会被绑定 变成受控组件 */}
                <input type="text" value={name} onChange={e=>this.listenChange(e)}/>
                {/* 没有绑定 value 就是非受控组件 */}
                <input type='text'/>
                <h1>userName: {name}</h1>
            </div>
        );
    }
}

export default APP;