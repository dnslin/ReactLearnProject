/**
 * @name: Detail.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 06_learn_router/src/pages
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/31
 */
import React, {PureComponent} from 'react';
import witchRouter from "../hoc/witchRouter";

export class Detail extends PureComponent {
    render() {
        const { router } = this.props
        const id = router.params.id
        return (
            <div>
                <h1>Detail</h1>
                <span>id:{id}</span>
            </div>
        );
    }
}

export default witchRouter(Detail);