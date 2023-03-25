/**
 * @name: index.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/CommunicationCases
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/24
 */
import './style.css';
import React, {Component} from 'react';

export class TableController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
        }
    }

    itemClick(index) {
        this.props.colorClick(index)
        this.setState({
            currentIndex: index,
        })
    }
    render() {
        const { titles, itemType} = this.props
        const { currentIndex } = this.state
        return (
            <div className='tab-control'>
                {titles.map((item, index) => {
                    return <div className={`tab-item ${index === currentIndex && 'active'}`} key={index}
                                onClick={()=>this.itemClick(index)}>
                        {/*<span className='text'>{item}</span>*/}
                        {itemType(item)}
                    </div>
                })}
            </div>
        );
    }
}

export default TableController;