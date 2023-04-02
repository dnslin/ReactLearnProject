/**
 * @name: Demo.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/HighOrderComponents
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/26
 */
import React, {PureComponent} from 'react';
// import enhancedUserInfo from "./hoc/hosFunc";

export class Demo extends PureComponent {


    render() {
        console.log(this.props)
        const {name, age, loveList} = this.props
        return (
            <div>
                <p>姓名3：{name}</p>
                <p>年龄3：{age}</p>
                {
                    loveList.map((item, index) => {
                        return <p key={index}>爱好{index + 1}：{item}</p>
                    })
                }
            </div>
        );
    }
}
// 对类组件进行高阶组件的封装
// export default enhancedUserInfo(Demo);
export default Demo;