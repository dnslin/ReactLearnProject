import React, {PureComponent} from 'react';
import {Navigate, NavLink, Route, Routes,useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import './css/style.css';
import Login from "./pages/Login";
import HomeRecommend from "./pages/HomeRecommend";
import HomeRanking from "./pages/HomeRanking";
class App extends PureComponent {
    render() {
        return (
            <div className="app">
                <div className="header">
                    <span>Header</span>
                    <div className="nav">
                        {/*<Link to='/home'>首页</Link>*/}
                        {/*<Link to='/about'>关于</Link>*/}
                        {/* NavLink 会自动给活动的link 添加一个class的属性 active 也可以这样style={()=>({color:"red"})} 也可以通过className */}
                        <NavLink to='/home' >首页</NavLink>
                        <NavLink to='/about'>关于</NavLink>
                        <NavLink to='/login'>登录</NavLink>
                        <button onClick={}>分类</button>
                        <span>订单</span>
                    </div>
                    <hr/>
                </div>
                <div className="content">
                    Content
                    {/*  路由隐射关系  */}
                    <Routes>
                        <Route path='/' element={<Navigate to='/home'/>}></Route>
                        <Route path='/home' element={<Home/>}>
                            <Route path='/home' element={<Navigate to='/home/recommend'/>}></Route>
                            <Route path='/home/recommend' element={<HomeRecommend/>}></Route>
                            <Route path='/home/ranking' element={<HomeRanking/>}></Route>
                        </Route>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='*' element={<Navigate to='/404'/>}/>
                    </Routes>
                </div>
                <div className="footer">
                    <hr/>
                    Footer
                </div>
            </div>
        );
    }
}

export default App;