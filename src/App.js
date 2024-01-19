import "./App.css";
import React from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

// 组件可以分为：函数组件 类组件 无状态组件 有状态组件 展示型组件 容器型组件
// 类组件需要继承React.Component  必须实现render函数

class App extends React.Component {
  // 1.构造方法
  constructor() {
    super();
    this.state = {
      message: "App Component",
    };
  }
  // 2.执行render函数
  render() {
    // const { message } = this.state;
    // 1.react元素：通过jsx编写的代码就会被编译成React.createElement,所以返回的就是react元素
    // 2.组件或者fragments
    return (
      <>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </>
    );
  }

  // 3.组件被渲染到DOM 被挂载DOM
  componentDidMount() {}

  // 4.组件的DOM被更新完成：DON发生更新 （数据变化的时候执行）
  componentDidUpdate(prevProps, prevState, snapshot) {
    // 在这里可以获取Snapshot 中保存的值
  }
  // 5.组件从DOM中卸载掉：从DOM移除掉
  componentWillUnmount() {}

  // 不常用的生命周期 (意思是要不要重新更新，可以决定render要不要重新更新渲染，可以用来优化)
  shouldComponentUpdate() {
    return false;
  }
  // 用来保存一些状态和值 比如滚动位置
  getSnapshotBeforeUpdate() {
    return {
      scroll: 90,
    };
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
