/**
 * @name: Profile.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 04_learn_redux/src/pages
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/29
 */
import React, {PureComponent} from 'react';
import store from "../store";
import {subNumberAction} from "../store/actionCreators";

export class Profile extends PureComponent {
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
    subNum(num){
        store.dispatch(subNumberAction(num))
    }
    render() {
        const { counter } = this.state
        return (
            <div>
                <h2>Profile Counter: {counter}</h2>
                <div>
                    <button onClick={event => this.subNum(1)}>-1</button>
                    <button onClick={event => this.subNum(3)}>-3</button>
                    <button onClick={event => this.subNum(5)}>-5</button>
                    <button onClick={event => this.subNum(9)}>-9</button>
                </div>
            </div>
        );
    }
}

export default Profile;