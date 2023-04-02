/**
 * @name: Page.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/HighOrderComponents
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/26
 */
import React, {PureComponent} from 'react';

import withThemes from "./hoc/with_themes";

export class Page extends PureComponent {
    render() {
        const {name, age, loveList} = this.props
        return (
            <div>
                {/* 利用高阶组件进行二次封装 */}
                {/*<ThemesContext.Consumer>*/}
                {/*    {*/}
                {/*        value => {*/}
                {/*            const {name, age, loveList} = value*/}
                {/*            return (*/}
                {/*                <div>*/}
                {/*                    <p>姓名4：{name}</p>*/}
                {/*                    <p>年龄4：{age}</p>*/}
                {/*                    {*/}
                {/*                        loveList.map((item, index) => {*/}
                {/*                            return <p key={index}>爱好{index + 1}：{item}</p>*/}
                {/*                        })*/}
                {/*                    }*/}
                {/*                </div>*/}
                {/*            );*/}
                {/*        }*/}
                {/*    }*/}
                {/*</ThemesContext.Consumer>*/}
                <h2>name: {name}</h2>
                <h2>age: {age}</h2>
                {
                    loveList.map((item, index) => {
                        return <p key={index}>loveList{index + 1}：{item}</p>
                    })
                }
            </div>
        );
    }

}

// Page.contextType = ThemesContext;


export default withThemes(Page);