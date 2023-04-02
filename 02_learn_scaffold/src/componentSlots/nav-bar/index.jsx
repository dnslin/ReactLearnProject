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
import PropTypes from 'prop-types';
export class NavBar extends Component {
    static propTypes = {
        children: PropTypes.array
    };

    render() {
        const { children } = this.props;
        return (
            <div className='nav-bar'>
                <div className="left">{children[0]}</div>
                <div className="center">{children[1]}</div>
                <div className="right">{children[2]}</div>
            </div>
        );
    }
}

export default NavBar;