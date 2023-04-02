/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/TransitionAnimation
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/27
 */
import React, {PureComponent} from 'react';
import {CSSTransition} from "react-transition-group";
import './stytle.css';
export class APP extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    render() {
        const {show} = this.state;
        return (
            <div>
                <button onClick={() => this.setState({show: !show})}>切换</button>
                <CSSTransition in={show} timeout={300} classNames="fade" unmountOnExit>
                    <h1 className="box">Hello World</h1>
                </CSSTransition>

            </div>
        );
    }
}

export default APP;