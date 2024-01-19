import * as actionTypes from "./constants.js";
export const addNumberAction = (num) => ({
  type: actionTypes.ADD_COUNTER,
  num,
});

export const subNumberAction = (num) => ({
  type: actionTypes.REDUCE_COUNTER,
  num,
});
