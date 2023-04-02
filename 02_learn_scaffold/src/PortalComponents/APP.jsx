/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/PortalComponents
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/27
 */
import React, {PureComponent} from 'react';
import {createPortal} from "react-dom";

// 想渲染到哪个节点上，就把组件放到哪个节点上
export class APP extends PureComponent {
    render() {
        return (
            <div>
                {createPortal(<h2>app</h2>, document.querySelector('#why'))}
            </div>
        );
    }
}

export default APP;