/**
 * @name: Home.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 05_learn_rtk/src/pages
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/30
 */
import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {increment} from "../store/features/counter";

export class Home extends PureComponent {

    addClick(num){
        const { incrementNum } = this.props
        incrementNum(num)
    }

    render() {
        const { value } = this.props
        return (
            <div>
                <h2>Home: counter: {value}</h2>
                <button onClick={e => this.addClick(5)}>+5</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    value: state.counter.value
})

const mapDispatchToProps = (dispatch) => ({
    incrementNum: (num) => dispatch(increment(num)),
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);