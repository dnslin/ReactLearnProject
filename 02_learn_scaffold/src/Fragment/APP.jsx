/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/Fragment
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/27
 */
import React, {PureComponent, Fragment} from 'react';

export class APP extends PureComponent {
    render() {
        return (
            //  Fragment 可以不用包裹 外面的 div 标签 但是要注意的是 缩写的时候 不能使用 key 属性
            // <Fragment>
            //     <h1>Fragment</h1>
            // </Fragment>

            // 缩写 但是不能使用 key 属性
            <>
                <h1>Fragment</h1>
            </>
        );
    }
}

export default APP;