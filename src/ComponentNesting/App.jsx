/**
 * @name: App.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/ComponentNesting
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/23
 */
import React, {Component} from 'react';
import Main from './Components/Main';
import Header from './Components/Header';
import Footer from './Components/Footer';

export class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;