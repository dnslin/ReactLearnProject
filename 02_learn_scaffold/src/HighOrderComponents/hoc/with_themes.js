/**
 * @name: with_themes.js
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/HighOrderComponents/hoc
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/26
 */

import ThemesContext from "./ThemesContext";

// TODO: 二次封装高阶组件 BLOG 记录
// 高阶组件的 二次封装 用于传 递 context 的值
function withThemes(WrappedComponent) {
    return props => {
        return <ThemesContext.Consumer>{
            themes => <WrappedComponent {...props} {...themes}/>
        }</ThemesContext.Consumer>
    }
}

export default withThemes