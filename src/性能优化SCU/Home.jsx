import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      message: 'Home'
    }
  }
  // shouldComponentUpdate (nextProps, nextState) {
  //   // 自己对比state是否发生变化：this.state和newState
  //   // 组件要不要重新更新   虽然不更新了，但之后都不会更新
  //   console.log(nextProps)
  //   if(this.props.message !== nextState.message) {
  //     return true
  //   } else {
  //     return false
  //   }
    
  // }
  render() {
    console.log('Home-render')
    return (
      <div>
        <h2>Home Page</h2>
      </div>
    )
  }
}

export default Home