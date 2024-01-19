import React, { PureComponent} from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
// findDOMNode 访问底层DOM节点的应急方案 严格模式下被废弃 传入一个组件会返回组件的DOM节点
// import { findDOMNode } from 'react-dom' 
// Ant Design 就有使用 findDOMNode

// StrictMode 严格模式  
// 严格模式下render 和生命周期会执行两次， 可以使用react devtool 会让第一次执行的打印变成灰色

// strictMode是组件，不会渲染任何UI ，用来检测警告和一些语法错误
export class App extends PureComponent {
  constructor () {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        {/* <StrictMode></StrictMode> */}
        <Home></Home>
        <Profile></Profile>
      </div>
    )
  }
}

// 严格模式的作用
// 可以识别已经不推荐使用的生命周期和语法
// 识别使用过时的ref API
// 可以检测意外的副作用(render 和一些生命周期会执行两次,生产环境里面不会调用两次)
export default App