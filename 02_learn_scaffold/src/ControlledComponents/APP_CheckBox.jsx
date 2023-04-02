/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/ControlledComponents
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/25
 */
import React, {PureComponent} from 'react';

export class APP extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isAgree: false
        }
    }

    handleSubmit(event) {
        // 阻止默认事件
        event.preventDefault();
        console.log("username", this.state.username);
        console.log("password", this.state.password);
    }

    handleInputChange(event) {
        // 触发同一个事件 通过name来区分 event.target.name
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleCheckChange(event) {
        //  checkbox 事件 通过checked来区分
        this.setState({
            isAgree: event.target.checked
        })
    }


    render() {
        const {username, password,isAgree} = this.state;
        return (
            <div>
                <div className='form'>
                    {/* button事件会触发 这个onsubmit事件 */}
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <label htmlFor="username">
                            userName:<input
                            type="text"
                            id='username'
                            value={username}
                            name='username'
                            onChange={event => this.handleInputChange(event)}
                        />
                        </label>
                        <br/>
                        <label htmlFor="password">
                            passWord:<input
                            type="text"
                            id='password'
                            value={password}
                            name='password'
                            onChange={event => this.handleInputChange(event)}
                        />
                        </label>
                        <br/>
                        {/* 当要把checkbox变为受控组件 要绑定 checked 属性  */}
                        <label htmlFor="agree">
                            <input id='agree'
                                   type="checkbox"
                                   checked={isAgree}
                                   onChange={event => this.handleCheckChange(event)}
                            /> 记住密码
                        </label>
                        <button type='submit'>注册</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default APP;