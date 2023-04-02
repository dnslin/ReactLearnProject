/**
 * @name: MainBanner.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/ComponentNesting/Components
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/23
 */
import React, {Component} from 'react';
import PropTypes from "prop-types";

export class MainBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    // es13 的写法
    static propTypes = {

    }
    static defaultProps = {

    }
     render() {
        const { productList } = this.props;
        return (
            <div>
                <h2>商品列表</h2>
                <ul>
                    { productList.map((item,index) => {
                        return <li key={index}>{item.title}</li>
                    }) }
                </ul>
            </div>
        );
    }
}
// 设置类型检查
MainBanner.propTypes = {
    //必传
    productList: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};
// 设置默认值
MainBanner.defaultProps = {
    title: '轮播图',
    productList: []
}
export default MainBanner;