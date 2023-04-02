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
            isAgree: false,
            multipleChoice: [
            {
                'name':'sing',
                'value':'唱',
                'checked':false
            },{
                'name':'dance',
                'value':'跳',
                'checked':false
            },{
                'name':'rap',
                'value':'rap',
                'checked':false
            }],
            //  单选
            fruit: 'apple',
            //  多选
            fruitsList: ['apple']
        }
    }

    handleSubmit(event) {
        // 阻止默认事件
        event.preventDefault();
        console.log("username", this.state.username);
        console.log("password", this.state.password);
        console.log("isAgree", this.state.isAgree);
        console.log("multipleChoice", this.state.multipleChoice.filter(item => item.checked).map(item => item.value));
        console.log("fruitsList", this.state.fruitsList);
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
    handleALLCheckChange(status,index){
        let [...multipleChoice] = this.state.multipleChoice;
        multipleChoice[index].checked = !status;
        this.setState({
            multipleChoice
        })
    }

    handleChangeFruit(event){
        //  当要把select变为受控组件 要绑定 value 属性 单选的时候可以这样做 但是多选的时候就不行了
        // this.setState({
        //     fruit: event.target.value
        // })
        //  多选的时候
        let [...fruitsList] = this.state.fruitsList;
        // 本身是类数组 要变为转为数组
        // fruitsList = Array.from(event.target.selectedOptions).map(item => item.value)
        fruitsList = Array.from(event.target.selectedOptions,item => item.value)
        this.setState({fruitsList})
    }


    render() {
        const {username, password,isAgree,multipleChoice,fruitList} = this.state;
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
                        <br/>
                        {
                            multipleChoice.map((item,index) => {
                                return (
                                    <label key={item.name} htmlFor={item.name}>
                                        <input id={item.name}
                                               type="checkbox"
                                               checked={item.checked}
                                               onChange={() => this.handleALLCheckChange(item.checked,index)}
                                        /> {item.value}
                                    </label>
                                )
                            })
                        }
                        <br/>
                        {/* select */}
                        <select name="select" id="select" value={fruitList} onChange={event => this.handleChangeFruit(event)} multiple>
                            <option value="apple">苹果</option>
                            <option value="orange">橘子</option>
                            <option value="chestnut">栗子</option>
                        </select>
                        <button type='submit'>注册</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default APP;