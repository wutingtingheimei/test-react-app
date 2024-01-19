import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import Model from './Model'
// createPortal 渲染到root之外 和vue中的teleport有同样的功能
export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App H1</h1>
        {
          createPortal(<h2>创建 Portal</h2>,document.querySelector('#why'))
        }
        <Model>
          <p>大标题</p>
          <p>副标题</p>
        </Model>
      </div>
    )
  }
}

export default App