/**
 * @name: witchRouter.js
 * @projectName: ReactProject
 * @description: 用于获取路由的高阶组件
 * @dirPath: 06_learn_router/src/hoc
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/31
 */
import {useLocation, useNavigate, useParams,useSearchParams} from "react-router-dom";
import React from "react";

function witchRouter(WrappedComponent) {
    return props => {
        const navigate = useNavigate()
        // console.log(params)
        // const router = { navigate }
        // /path/:id
        const params = useParams()

        // 路径参数获取  ?id=1&name=2
        const location = useLocation()
        const [searchParams] = useSearchParams()
        const query = Object.fromEntries(searchParams.entries())
        return (
            <WrappedComponent {...props} router={{navigate, params, location,query}}/>
        )
    }
}

export default witchRouter