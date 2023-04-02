import React, {PureComponent,Component} from 'react';


class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    changeText(){
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        const {count} = this.state;
        return (
            <div>
                <h2>counter: {count} </h2>
                <button onClick={event => this.changeText()}>按钮</button>
            </div>
        );
    }
}


function HelloWorld2(props) {
    const [count, setCount] = React.useState(0);
    function changeText(){
        setCount(count + 1);
    }
    return (
        <div>
            <h2>counter: {count} </h2>
            <button onClick={event => changeText()}>按钮</button>
        </div>
    );
}

export class App extends PureComponent{

    render() {
        return (
            <div>
                app
                <HelloWorld/>
                <hr/>
                <HelloWorld2/>
            </div>
        )
    }
}

export default App;