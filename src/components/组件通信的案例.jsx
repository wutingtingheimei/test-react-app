import React, { Component } from 'react'
import './style.css'
export class 组件通信的案例 extends Component {
  constructor () {
    super()
    this.state = {
      activeIndex : 0
    }
  }
  itemClick (index) {
    console.log(index, '111')
    this.setState({
      activeIndex: index
    })
    this.props.tabClick(index)
  }
  render() {
    const {tabList, itemType} = this.props
    const {activeIndex} = this.state
    return (
      <div className='list'>
        {
          tabList.map((item,index) => {
            return <div className={`item ${index === activeIndex ? 'active' : ''}`} key={item} onClick={(e)=>this.itemClick(index)}>
              <span className='border-bottom'>{item}</span>
              {/* 作用域插槽 */}
              {itemType(item)}
            </div>
          })
        }
      </div>
    )
  }
}

export default 组件通信的案例