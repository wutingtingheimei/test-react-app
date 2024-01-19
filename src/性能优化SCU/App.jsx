import React, { PureComponent } from "react";
import Home from "./Home";
import Recommend from "./Recommend";
import Profile from "./Profile";



// PureComponent 自动对prop和state 判断，数据变化则更新 （浅层比较，深层不比较）
// react通过diff算法来优化
// render函数的优化
export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "render函数的优化",
      counter: 0,
    };
  }
  componentDidMount () {
    console.log('执行')
  }
  //  性能优化的一个方式
  // shouldComponentUpdate (nextProps, nextState) {
  //   if(this.state.message !== nextState.message || this.state.counter !== nextState.counter) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  
  changeText () {
    this.setState({ message: '我要重新修改'}, ()=> {
      
    })
    // setState 会重新调用render函数 不利于性能
    console.log('修改文本')

  }
  changeCounter () {
    this.setState({counter: this.state.counter + 1})

  }
  render() {
    console.log('App-render')
    const { message, counter } = this.state;
    return (
      <div>
        App
        <h2>
          {message}-{counter}
        </h2>
        <button onClick={e => this.changeText()}>修改文本</button>
        <button onClick={e => this.changeCounter()}>counter + 1</button>
        <Home message={message}></Home>
        <Recommend counter={counter}></Recommend>
        <Profile message={message}></Profile>
      </div>
    );
  }
}

export default App;
