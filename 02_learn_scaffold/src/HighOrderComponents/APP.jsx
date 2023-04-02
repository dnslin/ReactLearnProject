/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/HighOrderComponents
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/26
 */
import React, {PureComponent} from 'react';
import Demo from "./Demo";
import Page from "./Page";
import ThemesContext from "./hoc/ThemesContext";
import enhancedUserInfo from "./hoc/hosFunc";
//  1. 通过高阶组件获取数据 将 props 传递给子组件
const UserInfo = enhancedUserInfo(function (props) {
    return (
        <div>
            <p>姓名1：{props.name}</p>
            <p>年龄1：{props.age}</p>
        </div>
    );
});
const UserInfoTwo = enhancedUserInfo(function (props) {
    return (
        <div>
            <p>姓名2：{props.name}</p>
            <p>年龄2：{props.age}</p>
        </div>
    );
});


export class APP extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: 'maker',
                age: 18,
                loveList: ['篮球', '足球', '羽毛球']
            }
        }
    }

    render() {
        const {userInfo} = this.state
        return (
            <div>
                <UserInfo/>
                <UserInfoTwo/>
                <Demo {...userInfo}/>
                <ThemesContext.Provider value={userInfo}>
                    <Page/>
                </ThemesContext.Provider>
            </div>
        );
    }
}

export default APP;

