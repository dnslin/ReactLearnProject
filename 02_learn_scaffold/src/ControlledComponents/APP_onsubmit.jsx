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
            username: ''
        }
    }
    handleSubmit(event) {
        // 阻止默认事件
        event.preventDefault();
        console.log(event.target.username.value);
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }


    render() {
        const {username} = this.state;
        return (
            <div>
                {/* button事件会触发 这个onsubmit事件 */}
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label htmlFor="username">
                        <input
                            type="text"
                            id='username'
                            value={username}
                            name='username'
                            onChange={event => this.handleUsernameChange(event)}
                        />
                    </label>
                   <button type='submit' >注册</button>
                </form>
            </div>
        );
    }
}

export default APP;