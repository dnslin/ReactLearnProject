/**
 * @name: SubCount.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/ComponentChild
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/23
 */
import React, {Component} from 'react';

export class SubCount extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    sub(count){
        this.props.subClick(count);
    }
    render() {
        return (
            <div>
                <button onClick={event => this.sub(-1)}>-1</button>
                <button onClick={event => this.sub(-5)}>-5</button>
                <button onClick={event => this.sub(-10)}>-10</button>
            </div>
        );
    }
}

export default SubCount;