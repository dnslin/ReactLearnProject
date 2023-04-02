/**
 * @name: index.js
 * @projectName: ReactProject
 * @description:
 * @dirPath: 06_learn_router/src/router
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/31
 */
import {Navigate} from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import HomeRecommend from "../pages/HomeRecommend";
import HomeRanking from "../pages/HomeRanking";
import HomeSongMenu from "../pages/HomeSongMenu";
import NotFound from "../pages/NotFound";
import Detail from "../pages/Detail";
import User from "../pages/User";
// import Login from "../pages/Login";
// import About from "../pages/About";
import Order from "../pages/Order";
import Category from "../pages/Category";

// 懒加载
const Login = React.lazy(() => import('../pages/Login'))
const About = React.lazy(() => import('../pages/About'))

// <Routes>
//     <Route path='/' element={<Navigate to='/home'/>}></Route>
//     <Route path='/home' element={<Home/>}>
//         <Route path='/home' element={<Navigate to='/home/recommend'/>}></Route>
//         <Route path='/home/recommend' element={<HomeRecommend/>}></Route>
//         <Route path='/home/ranking' element={<HomeRanking/>}></Route>
//         <Route path='/home/songMenu' element={<HomeSongMenu/>}></Route>
//     </Route>
//     <Route path='/category' element={<Category/>}></Route>
//     <Route path='/order' element={<Order/>}></Route>
//     <Route path='/about' element={<About/>}/>
//     <Route path='/login' element={<Login/>}/>
//     <Route path='/user' element={<User/>}/>
//     {/* 路由传参数 */}
//     <Route path='/detail/:id' element={<Detail/>}/>
//     <Route path='*' element={<Navigate to='/404'/>}/>
// </Routes>
//  q: 根据上面的路由配置实现下面的路由配置
//  a: 1. 通过path属性来匹配路由
//     2. 通过element属性来渲染组件
//     3. 通过children属性来配置子路由

const routes =[
    {
        path: '/',
        element: <Navigate to={'/home'} />,
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: '/home',
                element: <Navigate to={'/home/recommend'} />,
            },{
                path: '/home/recommend',
                element: <HomeRecommend />,
            },{
                path: '/home/ranking',
                element: <HomeRanking />,
            },{
                path: '/home/songMenu',
                element: <HomeSongMenu />,
            }
        ]
    },{
        path: '/category',
        element: <Category />,
    },{
        path: '/order',
        element: <Order />,
    },{
        path: '/about',
        element: <About />,
    },{
        path: '/login',
        element: <Login />,
    },{
        path: '/user',
        element: <User />,
    },{
        path: '/detail/:id',
        element: <Detail />,
    },{
        path: '*',
        element: <NotFound />,
    }
]

export default routes
