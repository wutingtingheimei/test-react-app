import * as actionType from "./constants";
const initialState = {
  counter: 100,
  banners: [],
  recommends: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.ADD_COUNTER:
      return { ...state, counter: state.counter + action.num };
    case actionType.REDUCE_COUNTER:
      return { ...state, counter: state.counter - action.num };
    case actionType.CHANGE_BANNER:
      return { ...state, banners: action.banners };
    case actionType.CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}

export default reducer;
