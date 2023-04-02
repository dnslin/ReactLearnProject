/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/ComponentCss
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/27
 */
import React, {PureComponent} from 'react';
import { HeaderWrapper } from "./style";
// import appStyle from './APP.module.css';
export class APP extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            size: 30,
            color: '#dff8e0'
        }
    }
    changeFz(){
        let size = this.state.size + 1
        this.setState({size})
    }
    render() {
        return (
            <HeaderWrapper {...this.state}>
                <div>
                    {/*<h2 className={appStyle.title}> H2 css </h2 >*/}
                    <h2 className='title'> H2 CSS </h2 >
                    <div>
                        <p className='footer'> footer </p>
                        <button onClick={event => this.changeFz()}>变大</button>
                    </div>
                </div>
            </HeaderWrapper>
        );
    }
}

export default APP;