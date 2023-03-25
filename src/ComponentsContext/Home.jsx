/**
 * @name: Home.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/ComponentsContext
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/24
 */
import React, {Component} from 'react';
import HomeInfo from "./HomeInfo";
export class Home extends Component {
    render() {
        //  接受 展开对象
        const { ...info } = this.props;
        return (
            <div>
                <HomeInfo/>
                <h1>{info.name} {info.age}</h1>
            </div>
        );
    }
}

export default Home;