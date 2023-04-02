/**
 * @name: HomeInfo.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/ComponentsContext
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/24
 */
import React, {Component} from 'react';
import ThemesContext from "./context/themesContext";
export class HomeInfo extends Component {
    render() {
        // 设置类型以后就能获取到了
        console.log(this.context)
        return (
            <div>
                <h2> homeInfo: {this.context.name}</h2>
                {/* 通过 Consumer 也能获取到 但是太过于繁琐了*/}

                <ThemesContext.Consumer>
                    {
                        value => <h2>info {value.age}</h2>
                    }
                </ThemesContext.Consumer>
            </div>
        );
    }
}



HomeInfo.contextType = ThemesContext
export default HomeInfo;