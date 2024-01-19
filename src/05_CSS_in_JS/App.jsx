import React, { PureComponent } from 'react'
import { AppWrapper, SectionWrapper } from './style'
import Home from './home/index'
export class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      size: 30,
      color: ''

    }
  }
  render() {
    const {size, color} = this.state
    return (
      // styled-components 基本使用
      <AppWrapper>
        <SectionWrapper size={size} color={color}>
          <h2 className='title'>我是标题</h2>
          <p className='content'>我是内容哈哈哈哈</p>
          <button onClick={e=>{this.setState({color: 'skyblue'})}}>修改颜色</button>
        </SectionWrapper>
        <Home></Home>
        <div className='footer'>
          <p>免责声明</p>
          <p>版权声明</p>
        </div>
       
      </AppWrapper>
    )
  }
}

export default App

// CSS in JS
//库： styled-components emotion glamorous
// js为css赋予一些能力，包括css预处理器一样的样式嵌套、函数定义、逻辑复用、 动态修改状态（例如：Material UI）
// CSS由Javascript生成而不是在外部文件定义