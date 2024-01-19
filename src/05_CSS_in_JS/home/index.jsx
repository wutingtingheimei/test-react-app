import React, { PureComponent } from 'react'
import { HYButtonWrapper, HomeWrapper } from './style'

export class index extends PureComponent {

  render() {
    return (
      <HomeWrapper>
        <div className='top'>
          <div className='banner'>Banner Content</div>
        </div>
        <div className='bottom'>
          <h2 className='header'>商品列表</h2>
          <ul className='product-list'>
            <li className='item'>商品列表1</li>
            <li className='item'>商品列表2</li>
            <li className='item'>商品列表3</li>
            <li className='item'>商品列表4</li>
            <li className='item'>商品列表5</li>
          </ul>

        </div>
        <HYButtonWrapper>哈哈哈</HYButtonWrapper>
      </HomeWrapper>
    )
  }
}

export default index