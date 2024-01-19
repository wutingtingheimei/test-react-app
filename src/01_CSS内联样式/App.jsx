import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      fontSize: '20px',
      color: 'purple',
      textSize: 30
    }
  }
  addTitleSize () {
    this.setState({textSize: this.state.textSize + 2})
  }
  render() {
    const {fontSize, color, textSize} = this.state
    return (
      <div>
        <button onClick={e => this.addTitleSize()}>增加标题的size</button>
        <h2 style={{ color, fontSize:`${textSize}px`}}>我是标题</h2>
        <p style={{color: 'blue', fontSize}}>我是内容，哈哈哈哈</p>
      </div>
    )
  }
}

export default App

// 内联样式优点：
// 1.样式之间不会有冲突
// 2.可以动态获取当前state的状态
// 内联样式缺点：
// 1.必须采用驼峰标识
// 2.某些样式没有提示
// 3.大量的样式,容易混乱
// 4.某些样式无法编写（伪类、伪元素）
