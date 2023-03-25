/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/ComponentChild
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/23
 */
import React, {Component} from 'react';
import AddCount from './AddCount';
import SubCount from './SubCount';

export class APP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 100
        };
    }

    changeResult(count){
        this.setState({
            result: this.state.result + count
        });
    }
    render() {
        const {result} = this.state;
        return (
            <div>
                <h1> 总数为:{result} </h1>
                <AddCount addClick={count=>this.changeResult(count)}/>
                <SubCount subClick={count=>this.changeResult(count)} />
            </div>
        );
    }
}

export default APP;