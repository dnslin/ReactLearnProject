/**
 * @name: login_auth.js
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/HighOrderComponents/hoc
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/26
 */

// 传入一个组件，返回一个组件
function loginAuth(WrappedComponent) {
    // 传入 props
    return props => {
        if (!props.isLogin) return <div>请登录</div>
        return <WrappedComponent {...props}/>
    }
}

export default loginAuth