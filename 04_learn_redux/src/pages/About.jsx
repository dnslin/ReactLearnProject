/**
 * @name: About.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 04_learn_redux/src/pages
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/29
 */
import React, {PureComponent} from 'react';
import { connect } from  'react-redux'
import {addNumberAction, subNumberAction} from "../store/actionCreators";

export class About extends PureComponent {

    calculationMethod(num, method) {
        const {addNum,subNum} = this.props
        if (method) {
            addNum(num)
        } else {
            subNum(num)
        }
    }

    render() {
        const { counter } = this.props
        console.log("about",counter)
        return (
            <div>
                <h2> About Counter: {counter}</h2>
                <div>
                    <button onClick={event => this.calculationMethod(1,true)}>+1</button>
                    <button onClick={event => this.calculationMethod(3,false)}>-3</button>
                    <button onClick={event => this.calculationMethod(5,true)}>+5</button>
                    <button onClick={event => this.calculationMethod(9,false)}>-9</button>
                </div>
            </div>
        );
    }
}
// 传入 组件的state 然后返回一个隐射关系 因为不是store里的所有数据我们都需要
const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
    addNum: (num) => {
        dispatch(addNumberAction(num))
    },
    subNum: (num) => {
        dispatch(subNumberAction(num))
    }
})
// connect 是一个高阶函数 调用方法为 connect(函数1，函数2)(组件)
export default connect(mapStateToProps,mapDispatchToProps)(About);
