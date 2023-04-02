import * as actionTypes from "./constants"
import axios from "axios";


export const addNumberAction = (num) => ({
  type: actionTypes.ADD_NUMBER,
  num
})

export const subNumberAction = (num) => ({
  type: actionTypes.SUB_NUMBER,
  num
})


export const changeBannersAction = (banners) => ({
  type: actionTypes.CHANGE_BANNERS,
  banners
})

export const changeRecommendsAction = (recommends) => ({
  type: actionTypes.CHANGE_RECOMMENDS,
  recommends
})

//  redux-thunk 会自动执行 dispatch 返回函数
//  传入 dispatch 和 getState
export const fetchHomeMultidataAction = (dispatch,getState) => {
  axios.get("http://123.207.32.32:8000/home/Multidata").then(res => {
    const banner = res.data.data.banner.list
    const recommend = res.data.data.recommend.list
    dispatch(changeBannersAction(banner))
    dispatch(changeRecommendsAction(recommend))
  })
}