import React, { Component } from "react";
import Home from "./Home";
import eventBus from "./utils/eventBus";
export class App extends Component {


  constructor () {
    super()
    this.state = {
      age: 0,
      name:'', 
      height: 0
      
    }
  }
  componentDidMount() {
    // 监听事件
    eventBus.on("bannerPrev", this.bannerPrevClick);
    eventBus.on("bannerNext", this.bannerNextClick);
    // eventBus.on("bannerPrev", this.bannerPrevClick.bind(this));
    // 这个时候this没有绑定 有两个方法: 1.bind(this) 2.箭头函数 3.直接在总线on事件传入第三个参数
    // eventBus.on("bannerPrev", this.bannerPrevClick, this);
  }
  bannerNextClick =  (info) => {
    console.log('bannerNext', info)
    console.log(info)

  }
  bannerPrevClick = (name,age,height) => {
    console.log('app监听的bannerPrev', name,age,height)
    console.log(this)
    this.setState({name,age,height})
  }
  componentWillUnmount() {
    // 组件销毁的时候 要移除监听
    eventBus.off('bannerPrev',this.bannerPrevClick)
    eventBus.off("bannerNext", this.bannerNextClick);
    // 取消监听
  }
  // shouldComponentUpdate () {
  //   // 自己决定要不要更新 this.state
  //   // if prevState.message === this.state.message return false
  //   // else true
  // }


  // this.setState 可以重新渲染调用render()函数   通知react数据发生了变化
  // this.setState 方法继承自component
  render() {
    const { name, age, height} = this.state
    return (
      <div>
        <h1>App Component {name} -{age}-{height} </h1>
        <Home></Home>
      </div>
    );
  }
}

export default App;
