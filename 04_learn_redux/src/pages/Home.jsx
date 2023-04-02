/**
 * @name: Home.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 04_learn_redux/src/pages
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/29
 */
import React, {PureComponent} from 'react';
import store from "../store";
import {addNumberAction} from "../store/actionCreators";

export class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: store.getState().counter
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const state = store.getState()
            this.setState({counter: state.counter})
        })
    }
    addNum(num){
        store.dispatch(addNumberAction(num))
    }
    render() {
        const { counter } = this.state
        return (
            <div>
                <h2>Home Counter: {counter}</h2>
                <div>
                    <button onClick={event => this.addNum(1)}>+1</button>
                    <button onClick={event => this.addNum(3)}>+3</button>
                    <button onClick={event => this.addNum(5)}>+5</button>
                    <button onClick={event => this.addNum(9)}>+9</button>
                </div>
            </div>
        );
    }
}

export default Home;