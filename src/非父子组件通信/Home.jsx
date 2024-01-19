import React, { Component } from 'react'
import HomeInfo from './HomeInfo.jsx'
import HomeBanner from './HomeBanner.jsx'
export class Home extends Component {
  render() {
    const { name, age} = this.props
   
    return (
      <div>
        <span>{name}</span>
        <span>{age}</span>
        <HomeInfo></HomeInfo>
        <HomeBanner></HomeBanner>
      </div>
    )
  }
}

export default Home