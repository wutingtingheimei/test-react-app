import classNames from 'classnames'
import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      isbbb: false,
      isccc: true
    }
  }
  render() {
    const {isbbb, isccc} = this.state
    const classList = ['aaa']
    if(isbbb) classList.push('bbb')
    if(isccc) classList.push('ccc')
    const classname = classList.join(' ')
    return (
      <div>
        <h2 className={`aaa ${isbbb ? 'bbb': ''} ${isccc ? 'ccc': ''}`}>哈哈哈哈</h2>
        <h2 className={classNames('aaa',{bbb: isbbb, ccc: isccc})}>呵呵呵</h2>
        <h2 className={classname}>呵呵呵</h2>
        <h2 className={classNames(['aaa', {bbb: isbbb, ccc: isccc}])}>嘻嘻嘻嘻</h2>
      </div>
    )
  }
}

export default App


// classNames({'foo-bar': true})

// 纯函数
// 确定的输入，一定会产生确定的输出
// 函数执行过程中，不能产生副作用
// slice 是纯函数 splice 不是


// redux用来管理state状态

// redux的核心理念： store(存储数据，数据来自reducer) action(更新数据) reducer(将传入的state和action结合起来生成新的state)

