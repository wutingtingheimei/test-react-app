import React, { Component } from "react";
import Home from "./Home.jsx";
import ThemeContext from "./context/ThemeContext.js";
import UserContext from "./context/UserContext.js";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      info: {
        name: "222",
        age: 12,
      },
    };
  }
  render() {
    const { info } = this.state;
    return (
      <div>
        {/* <Home name='why'></Home>
        <Home {...info}></Home> */}
        {/* 给Home传递数据 */}
        {/* 普通home */}
        {/* 第二步 ： 通过ThemeContext中的Provider的value 属性为后代提供数据 */}

        <UserContext.Provider value={{nickName: '11111',age: 30}}>
          <ThemeContext.Provider value={{ color: "red", size: "30" }}>
            <Home {...info}></Home>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
