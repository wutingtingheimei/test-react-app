import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  // UNSAFE_componentWillMount () {
  //   console.log('UNSAFE_componentWillMount')
  // }
  render() {
    console.log('home')
    return (
      <div>Home</div>
    )
  }
}

export default Home