/**
 * @name: Home.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 06_learn_router/src/pages
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/31
 */
import React, {PureComponent} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import witchRouter from "../hoc/witchRouter";

export class Home extends PureComponent {
    navTo(path){
        const {router} = this.props
        router.navigate(path)
    }
    render() {

        return (
            <div>
                <h1>Home Pages</h1>
                <div className='home-nav'>
                    <NavLink to='/home/recommend'>推荐</NavLink>
                    <NavLink to='/home/ranking'>排行榜</NavLink>
                    <button onClick={e=>{this.navTo("/home/songMenu")}}>歌单</button>
                </div>
                {/* 占位组件   */}
                <Outlet/>
            </div>
        );
    }
}

// 高阶组件 函数 传递router navigate 让其能在class组件中使用
// function witchRouter(WrappedComponent) {
//     return props => {
//         const navigate = useNavigate()
//         const router = { navigate }
//         return (
//             <WrappedComponent {...props} router={router}/>
//         )
//     }
// }

export default witchRouter(Home);