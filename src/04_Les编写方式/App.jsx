import React, { PureComponent } from 'react'
// import './style.css'
import appStyle from './App.less'
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

// CSS in JS

//库： styled-components emotion glamorous
// js为css赋予一些能力，包括css预处理器一样的样式嵌套、函数定义、逻辑复用、 动态修改状态（例如：Material UI）
// CSS由Javascript生成而不是在外部文件定义