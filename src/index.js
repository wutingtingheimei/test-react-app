import React from "react";
import ReactDOM from "react-dom/client";
// 为所有组件提供store数据
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./index.css";
import store from "./store";
import { StoreContext } from "./hoc";
// import App from './性能优化SCU/App.jsx';
// import App from "./React的组件过渡动画/TransitionGroup动画/App.jsx";
// import App from './02_普通的css写法/App.jsx'
import App from "./pages/App";
// import TestApp from './Function_Component';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <StoreContext.Provider value={store}>
      <ThemeProvider theme={{ color: "#000", bgColor: "#FFF", size: "50px" }}>
        <App />
      </ThemeProvider>
    </StoreContext.Provider>
  </Provider>

  //React.StrictMode 开启严格模式
  // <React.StrictMode>
  //   {/* <TestApp></TestApp> */}
  //   <App/>
  // </React.StrictMode>
);

// ES6标签模板字符串
const name = "xixi";
const age = 17;
const str = `my name is ${name}, age is ${age}`;
console.log(str);

// 标签模板字符串的使用
// ...args剩余参数
function foo(...args) {
  console.log(args);
}

// foo('wuwu',18,1.89)

foo`my name is ${name}, age is ${age}`;
