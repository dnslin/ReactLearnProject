/**
 * @name: NotFound.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 06_learn_router/src/pages
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/31
 */
import React, {PureComponent} from 'react';

export class NotFound extends PureComponent {
    render() {
        return (
            <div>
                <h1>404</h1>
                <p>页面不存在</p>
            </div>
        );
    }
}

export default NotFound;