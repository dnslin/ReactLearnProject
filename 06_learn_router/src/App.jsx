import React from 'react';
import {NavLink, useNavigate, useRoutes} from "react-router-dom";

import './css/style.css';
import router from "./router";

export function App(props) {
    const navigate = useNavigate()
    function navGateTo(path) {
        navigate(path)
    }

    return (
        <div className="app">
            <div className="header">
                <span>Header</span>
                <div className="nav">
                    {/*<Link to='/home'>首页</Link>*/}
                    {/*<Link to='/about'>关于</Link>*/}
                    {/* NavLink 会自动给活动的link 添加一个class的属性 active 也可以这样style={()=>({color:"red"})} 也可以通过className */}
                    <NavLink to='/home'>首页</NavLink>
                    <NavLink to='/about'>关于</NavLink>
                    <NavLink to='/login'>登录</NavLink>
                    <NavLink to='/user?name=wjy&age=13'>用户</NavLink>
                    <button onClick={e=> navGateTo("/category")}>分类</button>
                    <span onClick={e=> navGateTo("/order")}>订单</span>
                </div>
                <hr/>
            </div>
            <div className="content">
                Content
                  {/*路由隐射关系  */}
                {/*<Routes>*/}
                {/*    <Route path='/' element={<Navigate to='/home'/>}></Route>*/}
                {/*    <Route path='/home' element={<Home/>}>*/}
                {/*        <Route path='/home' element={<Navigate to='/home/recommend'/>}></Route>*/}
                {/*        <Route path='/home/recommend' element={<HomeRecommend/>}></Route>*/}
                {/*        <Route path='/home/ranking' element={<HomeRanking/>}></Route>*/}
                {/*        <Route path='/home/songMenu' element={<HomeSongMenu/>}></Route>*/}
                {/*    </Route>*/}
                {/*    <Route path='/category' element={<Category/>}></Route>*/}
                {/*    <Route path='/order' element={<Order/>}></Route>*/}
                {/*    <Route path='/about' element={<About/>}/>*/}
                {/*    <Route path='/login' element={<Login/>}/>*/}
                {/*    <Route path='/user' element={<User/>}/>*/}
                {/*    /!* 路由传参数 *!/*/}
                {/*    <Route path='/detail/:id' element={<Detail/>}/>*/}
                {/*    <Route path='*' element={<Navigate to='/404'/>}/>*/}
                {/*</Routes>*/}
                { useRoutes(router) }
            </div>
            <div className="footer">
                <hr/>
                Footer
            </div>
        </div>
    );
}

export default App;