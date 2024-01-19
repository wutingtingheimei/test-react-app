import React, { PureComponent } from 'react'
import Detail from './Detail'
export class App extends PureComponent {
  render() {
    return (
      <div>
        {/* 看detail渲染时间 */}
        <Detail></Detail>
      </div>
    )
  }
}

export default App


// 高阶函数的意义
// 1.对react代码进行更加优雅的处理


// 缺陷
// 大量嵌套或者包裹，调试变得困难
// 不蹲守约定，props可能会造成冲突

// 高阶函数
// memo(Component)
// forwardRef(Component) 