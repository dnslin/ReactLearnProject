/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/ComponentsEventBus
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/25
 */
import React, {Component} from 'react';
import Home from "./Home";
export class APP extends Component {
    render() {
        return (
            <div>
                <h1>APP Component</h1>
                <Home/>
            </div>
        );
    }
}

export default APP;