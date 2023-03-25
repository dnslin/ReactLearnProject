/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/CommunicationCases
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/23
 */
import React, {Component} from 'react';
import TableController from './TableController';

export class APP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfColumns: ['流行', '新款', '精选'],
            itemIndex: 0,
        };
    }

    itemClick(itemIndex) {
        this.setState({itemIndex})
    }
    getItem(item) {
        if (item === '流行') {
            return <button>{item}</button>
        } else if (item === '新款') {
            return <span>{item}</span>
        }else if (item === '精选') {
            return <i>{item}</i>
        }
    }

    render() {
        // 如何实现作用域插槽
        const {listOfColumns, itemIndex} = this.state;
        return (
            <div className='app'>
                <TableController titles={listOfColumns} colorClick={index => this.itemClick(index)}
                                 itemType={item => this.getItem(item)}
                />
                <h1>{listOfColumns[itemIndex]}</h1>
            </div>
        );
    }
}

export default APP;