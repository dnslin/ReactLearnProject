import React, {PureComponent} from 'react';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import './style.css'
import store from "./store";
import About from "./pages/About";

class App extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            counter: store.getState().counter
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const state = store.getState()
            this.setState({counter: state.counter})
        })
    }

    render() {
        console.log(store.getState())
        const { counter } = this.state
        return (
            <div>
                <h2> APP Counter: {counter}</h2>
                <div className='pages'>
                    <Home/>
                    <Profile/>
                    <About/>
                </div>
            </div>
        );
    }
}

export default App;
