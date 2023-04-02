/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 05_learn_rtk/src
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/30
 */
import React, {PureComponent} from 'react';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import './style/App.css';
import {connect} from "react-redux";
export class APP extends PureComponent {
    render() {
        const { value } = this.props
        return (
            <div>
                <h2>APP Count: {value}</h2>
                <div className="pages">
                    <Home/>
                    <Profile/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    value: state.counter.value
})
export default connect(mapStateToProps)(APP);