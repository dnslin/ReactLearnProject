/**
 * @name: index.js
 * @projectName: ReactProject
 * @description:
 * @dirPath: 07_learn_hooks/src/useSelector/store
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/4/2
 */

import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./features/counterReducer";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})



export default store