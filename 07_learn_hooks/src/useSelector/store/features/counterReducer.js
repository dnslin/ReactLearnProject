/**
 * @name: counterReducer.js
 * @projectName: ReactProject
 * @description:
 * @dirPath: 07_learn_hooks/src/useSelector/store/features
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/4/2
 */

import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 100
    },
    reducers: {
        increment: (state, {payload}) => {
            state.count += payload
        },
        decrement: (state, {payload}) => {
            state.count -= payload
        }
    },
    extraReducers: {}
})

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer