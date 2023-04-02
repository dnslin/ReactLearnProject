/**
 * @name: App.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/jsx
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/22
 */
import React from 'react';
import HelloWorld from "./HelloWorld";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: 'DnsLin---!',
        isShow: true
    }
  }

    changeText() {
        this.setState({
            name: 'DnsLin---?'
        })
    }
    isShowFoo(){
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        const {isShow,name} = this.state;
        return (
            <div>
                <p>My name is {name}</p>
                <button onClick={event => this.changeText()}>按钮</button>
                <br/>
                <button onClick={event => this.isShowFoo()}>按钮</button>
                {isShow && <HelloWorld/>}
            </div>
        )
    }

}

export default App;