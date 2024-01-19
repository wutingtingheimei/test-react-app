import React, { PureComponent } from 'react'
// import './style.css'
import appStyle from './App.module.css'
import Home from './home/Home'
export class App extends PureComponent {
  constructor () {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <h2 className={appStyle.title}>我是标题</h2>
        {/* <p className='content'>我是内热 ，嘻嘻嘻嘻嘻</p> */}
        <p className={appStyle.content}>我是内热 ，嘻嘻嘻嘻嘻</p>
        <Home></Home>
      </div>
    )
  }
}

export default App

// React的脚手架已经内置了css modules的配置，但其他项目需要自己配置，比如Vue

// 解决了局部作用域的问题
// css module  缺点
// 不能使用连接符.home-title
// className必须使用className={style.name}
// 不能动态改变css变量