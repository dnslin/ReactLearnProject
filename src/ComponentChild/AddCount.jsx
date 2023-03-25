/**
 * @name: AddCount.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/ComponentChild
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/23
 */

import React, {Component} from 'react';

export class AddCount extends Component {
    add(count) {
        this.props.addClick(count);
    }

    render() {
        return (
            <div>
                <button onClick={event => this.add(1)}>+1</button>
                <button onClick={event => this.add(5)}>+5</button>
                <button onClick={event => this.add(10)}>+10</button>
            </div>
        );
    }
}

export default AddCount;