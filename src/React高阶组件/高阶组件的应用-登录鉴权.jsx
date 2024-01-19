import React, { PureComponent } from "react";
import Cart from "./Cart";
export class App extends PureComponent {

  constructor() {
    super();
    this.state = {
      isLogin: false,
    };
  }

  
  loginClick () {
    localStorage.setItem('token', 'token')
    this.setState({isLogin: true})
    // this.forceUpdate() // 强制刷新API 不推荐
  }
  render() {
    // const { isLogin } = this.state;
    return (
      <div>
        <button onClick={e=>this.loginClick()}>登录</button>
        {/* {isLogin ? <Cart></Cart> : <h2>请先登录再查看</h2>} */}
        <Cart></Cart>
      </div>
    );
  }
}

export default App;
