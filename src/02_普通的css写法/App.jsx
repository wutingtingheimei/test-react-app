import React, { PureComponent } from 'react'
import './style.css'
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
        <h2 className='title'>我是标题</h2>
        <p className='content'>我是内热 ，嘻嘻嘻嘻嘻</p>
        <Home></Home>
      </div>
    )
  }
}

export default App


// 普通css 缺点
// 属于全局样式，没有作用域， 容易产生样式冲突,