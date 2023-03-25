/**
 * @name: ListOfGoods.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/ComponentNesting/Components
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/23
 */
import React, {Component} from 'react';

export class ListOfGoods extends Component {
    render() {
        const { goods } = this.props
        return (
            <div>
                <h2>商品信息</h2>
                <ul>
                    {goods.map((item,index) => {
                        return <li key={index}>{item.title}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default ListOfGoods;