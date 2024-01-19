import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomeMultidataAction = createAsyncThunk("fetch/homemultidata", async (extraInfo, {dispatch, getState})=> {
  console.log(extraInfo, dispatch, getState)
  // 1.发送网络请求，获取数据
  const res = await axios.get('http://123.207.32.32:8000/home/multidata')
  // 2.取出数据，并在此处直接dispatch操作（可以不做
  // const banners = res.data.data.banner.list
  // const recommend = res.data.data.recommend.list

  // 返回结果，那么action状态会变成fulfilled状态
  return res.data
})


// 当createAsyncThunk创建出来的action被dispatch时存在三种状态：
// 和promise很像
// 1.pending   
// 2.fulfilled  （有结果了）
// 3.rejected （出错了）
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banners: [],
    recommends: []
  },
  reducers: {
    changeBanners (state, {payload}) {
      state.banners = payload

    },
    changeRecommends (state, {payload}) {
      state.recommends = payload
      
    }

  },
  // 异步操作 监听状态的时候
  // extraReducers: {
  //   [fetchHomeMultidataAction.pending](state, action) {
  //     console.log('pending')
  //   },
  //   [fetchHomeMultidataAction.fulfilled](state,{payload}) {
  //     console.log('fulfilled')
  //     state.banners = payload.data.banner.list
  //     state.recommends = payload.data.recommend.list
  //   },
  //   [fetchHomeMultidataAction.rejected](state,action){
  //     console.log('rejected')
  //   }

  // }

  // extraReducers另外一种写法 ，可以传入一个函数，接收一个builder参数
  extraReducers: (builder) => {
    builder.addCase(fetchHomeMultidataAction.pending, (state,action)=> {
      console.log('pending')
    }).addCase(fetchHomeMultidataAction.fulfilled, (state, {payload})=> {
      console.log('fulfilled')
      state.banners = payload.data.banner.list
      state.recommends = payload.data.recommend.list
    })
  }
})


export const  {changeBanners, changeRecommends}  = homeSlice.actions

export default homeSlice.reducer