import React, { Component } from 'react'

export class 组件插槽的实现 extends Component {
  
  render() {
    const {children} = this.props
    return (
      <div className='nav-bar'>
      <div className="left">{children[0]}</div>
      <div className="center">{children[1]}</div>
      <div className="right">{children[2]}</div>
      </div>
    )
  }
}

export default 组件插槽的实现