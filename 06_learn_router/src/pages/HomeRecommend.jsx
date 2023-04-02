/**
 * @name: HomeRecommend.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 06_learn_router/src/pages
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/31
 */
import React, {PureComponent} from 'react';

export class HomeRecommend extends PureComponent {
    render() {
        return (
            <div>
                <h2>Banner</h2>
                <h2>歌单列表</h2>
                <ul>
                    <li>歌单1</li>
                    <li>歌单2</li>
                    <li>歌单3</li>
                    <li>歌单4</li>
                </ul>
            </div>
        );
    }
}

export default HomeRecommend;