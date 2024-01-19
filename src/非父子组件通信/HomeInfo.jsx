import React, { Component } from "react";
import ThemeContext from "./context/ThemeContext";
import UserContext from "./context/UserContext";
export class HomeInfo extends Component {
  render() {
    // 拿到context的数据
    // 4.第四步操作：获取数据，并使用数据
    // Consumer可以共享多个数据适用于函数组件和类组件
    console.log(this.context, "context");
    return (
      <div>
        HomeInfo{this.context.color}
        <UserContext.Consumer>
          {(value) => {
            return <h2>Info user {value.nickName}</h2>
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}
// 3.第三步操作： 设置组件的contextType 为某一个context 等于订阅组件
HomeInfo.contextType = ThemeContext;
export default HomeInfo;
