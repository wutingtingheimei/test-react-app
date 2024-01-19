import React, { PureComponent } from 'react'
import enhancedUserInfo from './hoc/enhanced'

export class About extends PureComponent {
  render() {
    return (
      <div>About: {this.props.name} </div>
    )
  }
}

export default enhancedUserInfo(About)