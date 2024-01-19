import { createSlice } from "@reduxjs/toolkit";


// toolkit工具的使用

// 了解一下toolkit的异步操作
// immutable js   
// 数据不可变性
// 使用了immerjs库保证数据不可变性 类似于拷贝
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 999,
  },
  reducers: {
    // 等于之前的case语句
    addNumber(state, {payload}) {
      state.counter = state.counter + payload
    },
    subNumber(state, { payload }) {
      state.counter = state.counter - payload;
    },
  },
});

export const { addNumber, subNumber } = counterSlice.actions;

export default counterSlice.reducer;
