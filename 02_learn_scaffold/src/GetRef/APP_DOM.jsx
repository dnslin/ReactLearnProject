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

class Home extends PureComponent {

    test() {
        console.log('test');
    }
   render() {
       return (
           <div>
               <h2>Home</h2>
           </div>
       );
   }
}
export class APP_DOM extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
        this.myRef = createRef();
    }


    getNativeDOM() {
        // 获取到Home组件的实例对象 通过实例对象调用Home组件的方法
        this.myRef.current.test()
    }

    render() {
        return (
            <div>
                <Home ref={this.myRef}/>
                <button onClick={event => this.getNativeDOM()}>获取Dom</button>
            </div>
        );
    }
}

export default APP_DOM;