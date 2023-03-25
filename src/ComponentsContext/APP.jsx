/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/ComponentsContext
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/24e
 */
import React, {Component} from 'react';
import Home from "./Home";
import ThemesContext from './context/themesContext'


export class APP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                name: 'DnsLin',
                age: 18
            },
            infos: {
                name: 'Dns',
                age: 20
            }
        }
    }
    render() {
        const { info,infos } = this.state;
        return (
            <div>
                {/* 直接传递对象 */}
                {/*<Home {...info}/>*/}

                {/* 通过 Context 传递  注意webstorm 在 jsx的类里 Provider没有代码提示*/}

                {/* 也可以多层嵌套  多个Context 套娃*/}
                <ThemesContext.Provider value={infos}>
                    <Home {...info}/>
                </ThemesContext.Provider>
            </div>
        );
    }
}
export default APP;