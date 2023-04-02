/**
 * @name: User.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 06_learn_router/src/pages
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/31
 */
import React, {PureComponent} from 'react';
import witchRouter from "../hoc/witchRouter";

export class User extends PureComponent {
    render() {
        const { router } = this.props
        console.log(router)
        const query = router.query
        return (
            <div>
                <h1>User</h1>
                <span>age:{query.age}</span>
                <span>name:{query.name}</span>
            </div>
        );
    }
}

export default witchRouter(User)