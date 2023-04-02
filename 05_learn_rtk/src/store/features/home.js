/**
 * @name: home.js
 * @projectName: ReactProject
 * @description:
 * @dirPath: 05_learn_rtk/src/store/features
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/30
 */

import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBannerList = createAsyncThunk("home/fetchBannerList", async (object, store) => {
    const res = await axios.get('http://123.207.32.32:8000/home/multidata')
    // 也可以直接 用store.dispatch
    // store.dispatch(setBannerList(res.data.data.banner.list))
    // store.dispatch(setRecommendList(res.data.data.recommend.list))
    return res.data.data
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        bannerList: [],
        recommendList: []
    },
    // 同步操作
    reducers: {
        setBannerList: (state, {payload}) => {
            state.bannerList = payload
        },
        setRecommendList: (state, {payload}) => {
            state.recommendList = payload
        }
    },
    // 异步操作 两种写法 一共有三种状态 pending fulfilled rejected 对不同的状态做不同的处理
    // extraReducers: {
    //     [fetchBannerList.fulfilled]: (state, {payload}) => {
    //         state.bannerList = payload.banner.list
    //         state.recommendList = payload.recommend.list
    //     }
    // },
    extraReducers: (builder) => {
        builder.addCase(fetchBannerList.fulfilled, (state, {payload}) => {
            state.bannerList = payload.banner.list
            state.recommendList = payload.recommend.list
        })
    }
})

export const {setBannerList, setRecommendList} = homeSlice.actions

export default homeSlice.reducer