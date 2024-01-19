import React, { Component } from "react";

import eventBus from "./utils/eventBus";
// 想要通知APP.jsx
export class HomeBanner extends Component {
  // 想要一层一层往上传递
  nextClick() {
    console.log("下一个");
    eventBus.emit('bannerNext', {
      nickName: '哈哈哈哈', 
      level: 99
    })
  }
  prevClick() {
    console.log("上一个");
    // eventBus.emit('bannerPrev', 10)
    // 括号后面跟事件名字和多个参数
    eventBus.emit("bannerPrev", '名字', 2, 4);
  }
  render() {
    return (
      <div>
        <h1>HomeBanner</h1>
        <button onClick={(e) => this.prevClick()}>上一个</button>
        <button onClick={(e) => this.nextClick()}>下一个</button>
      </div>
    );
  }
}

export default HomeBanner;
