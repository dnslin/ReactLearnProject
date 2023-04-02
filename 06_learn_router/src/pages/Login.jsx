/**
 * @name: Login.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 06_learn_router/src/pages
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/31
 */
import React, {PureComponent} from 'react';
import {Navigate} from "react-router-dom";

export class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }
    login(){
        this.setState({
            isLogin: true
        })
    }
    render() {
        const {isLogin} = this.state
        return (
            <div>
                <h1>Login Pages</h1>
                { !isLogin? <button onClick={e=>this.login()}>login</button>: <Navigate to='/home'/>}
            </div>
        );
    }
}

export default Login;