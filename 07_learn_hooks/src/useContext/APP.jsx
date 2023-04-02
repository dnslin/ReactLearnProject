/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 07_learn_hooks/src/useContext
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/4/1
 */
import React, {memo, useContext} from 'react'
import {ThemeContext, UserContext} from "./context";

const APP = memo(() => {
    const userContext = useContext(UserContext);
    const themeContext = useContext(ThemeContext);
    return(
        <div>
            <h1>APP</h1>
            <h2>{userContext.name}</h2>
            <h2>{themeContext.color}</h2>
        </div>
    )
})
export default APP