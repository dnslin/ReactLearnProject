/**
 * @name: counter.js
 * @projectName: ReactProject
 * @description:
 * @dirPath: 05_learn_rtk/src/store/features
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/30
 */
import {createSlice} from "@reduxjs/toolkit";
//  创建一个 片段 最终要和其他的片段合并
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 100
    },
    reducers: {
        increment: (state,action) => {
            state.value += action.payload
        },
        decrement: (state,action) => {
            state.value -= action.payload
        }
    }
})

export const { increment,decrement } = counterSlice.actions
export default counterSlice.reducer