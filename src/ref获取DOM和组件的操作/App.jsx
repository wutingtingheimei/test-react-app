import React, { PureComponent, createRef } from 'react'

export class App extends PureComponent {
  getNativeDOM () {
    // 原生获取dom：不推荐
    // const H2 = document.querySelector()

    // 1.在React元素上绑定一个ref字符串
    // console.log(this.refs.why) //被废弃
    // 2.提前创建好ref对象，createRef(), 将创建出来的对象绑定到元素
    // 3. 传入一个回调函数，在对应的元素被渲染之后，回调函数被执行,并且将元素传入
    console.log(this.titleEl)

    
  }
  constructor () {
    super()
    this.state = {

    }
    this.titleRef = createRef()
    this.titleEl = null
  }
  render() {
    return (
      <div>
        <h2>
          Hello word
        </h2>
        <h2 ref={this.titleRef}>你好啊</h2>
        <h2 ref={el=> {this.titleEl = el ;console.log(el)}}>你好啊, 嘿嘿嘿</h2>
        <button onClick={e => this.getNativeDOM()}>获取dom</button>
      </div>
    )
  }
}

export default App