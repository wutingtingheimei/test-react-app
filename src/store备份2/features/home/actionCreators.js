import axios from "axios";
import * as actionTypes from "./constants.js";
export const changeBannersAction = (banners) => ({
  type: actionTypes.CHANGE_BANNER,
  banners,
});

export const changeRecommendAction = (recommends) => ({
  type: actionTypes.CHANGE_RECOMMEND,
  recommends,
});

export const fetchHomeMultidataAction = (recommends) => {
  // 如果是一个普通的action,那么我们这里需要返回action对象
  // 问题：对象中是不能直接拿到从服务器请求异步数据的
  // return {}
  return function(dispatch, getState) {
    // console.log(getState().counter);
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const banners = res.data.data.banner.list;
      const recommend = res.data.data.recommend.list;
      // dispatch({ type: actionTypes.CHANGE_BANNER, banners });
      // dispatch({ type: actionTypes.CHANGE_RECOMMEND, recommend });
      dispatch(changeBannersAction(banners));
      dispatch(changeRecommendAction(recommend));
    });
    // 异步操作： 网络请求
  };
  // 如果返回的是一个函数，那么redux是不支持的
};

// action 是同步操作不能完成异步操作
