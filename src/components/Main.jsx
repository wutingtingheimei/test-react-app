import React, { Component } from "react";
import Banner from "./Banner.jsx";
import SubCounter from "./SubCounter.jsx";
import Tab from  './组件通信的案例.jsx'
import Slot from './组件插槽的实现.jsx'
import Slot2 from './组件插槽的实现2.jsx'
import Context from './Context应用场景.jsx'
import NotApp from '../非父子组件通信/App.jsx'
import EventBusComponent from '../非父子组件通信-EventBus/App.jsx'
import UseState from '../setState的详细使用/App.jsx'
import Scu from '../性能优化SCU/App.jsx'
import axios from "axios";
export class Main extends Component {
  constructor() {
    super();
    this.state = {
      banners: [],
      productList: [],
      counter: 100,
      tabList: ['流行', '新款', '精选'],
      tabIndex: 0
    };
  }
  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const banners = res.data.data.banner.list;
      const recommend = res.data.data.recommend.list;
      this.setState({ banners, productList: recommend }, () => {
        console.log('first')
        // 在回调函数中执行操作
      });
    });
  }
  tabClick (i) {
    this.setState({
      tabIndex: i 
    })
  }
  changeCount (count) {
    this.setState({ counter: this.state.counter + count})
  }
  render() {
    const { banners, productList, counter, tabList, tabIndex } = this.state;
    const btn = <button>111</button>
    // 组件通信
    return (
      <div>
        {counter}
        {/* 子组件传父组件 */}
        <SubCounter subClick={(count)=> this.changeCount(count)}></SubCounter>
        {/* end */}
        <Banner banners={banners} productList={productList} addClick={(count)=> this.changeCount(count)}></Banner>
        <Tab tabList={tabList} tabClick={i => this.tabClick(i)} itemType={item=><button>{item}</button>}></Tab>
        <h1>{tabList[tabIndex]}</h1>
        {/* 通过children 实现插槽 不推荐*/}
        <Slot>
          <button>按钮</button>
          <h1>插槽内容</h1>
          <i>斜体文字</i>
        </Slot>
        {/* 通过props 实现插槽 推荐*/} 
        <Slot2 leftSlot={btn} rightSlot={<i>斜体</i>} centerSlot={<h2>插槽内容</h2>}></Slot2>
        <Context></Context>
        <NotApp></NotApp>
        <EventBusComponent></EventBusComponent>
        <UseState></UseState>
        <Scu></Scu>
      </div>
    );
  }
}

export default Main;
