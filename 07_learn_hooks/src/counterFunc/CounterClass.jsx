/**
 * @name: CounterClass.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 07_learn_hooks/src/counterFunc
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/31
 */
import React, {PureComponent} from 'react';

export class CounterClass extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        const {count} = this.state;
        return (
            <div>
                <h2>counter: {count} </h2>
                <button onClick={event => this.setState({count: count + 1})}>+1</button>
                <button onClick={event => this.setState({count: count - 1})}>-1</button>
            </div>
        );
    }
}

export default CounterClass;