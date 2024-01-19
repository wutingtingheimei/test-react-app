import React, { PureComponent } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
// SwitchTransition: 可以完成两个组件之间切换的炫酷动画 用来和CSSTransition 或者Transition 搭配 此时不再使用in属性 而是设置key属性
import './style.css'
export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isLogin: true,
    };
  }
  render() {
    const { isLogin } = this.state;
    return (
      <div>
        {/* mode="in-out" 表示先进入 再离开 mode="out-in" 表示先离开 再进入 */}
        <SwitchTransition mode="out-in">
          <CSSTransition key={isLogin ? "exit": 'login'} classNames="login" timeout={1000}>
            <button onClick={(e) => this.setState({ isLogin: !isLogin })}>
              {isLogin ? "退出" : "登录"}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}

export default App;
