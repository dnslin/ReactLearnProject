/**
 * @name: index.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/componentSlots
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/24
 */
import './stytle.css';
import React, {Component} from 'react';
export class NavBars extends Component {


    render() {
        const {leftSlot, centerSlot, rightSlot} = this.props;
        return (
            <div className='nav-bar'>
                <div className="left">{leftSlot}</div>
                <div className="center">{centerSlot}</div>
                <div className="right">{rightSlot}</div>
            </div>
        );
    }
}

export default NavBars;