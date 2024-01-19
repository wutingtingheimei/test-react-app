import * as actionType from "./constants";
const initialState = {
  counter: 100,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.ADD_COUNTER:
      return { ...state, counter: state.counter + action.num };
    case actionType.REDUCE_COUNTER:
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}

export default reducer;
