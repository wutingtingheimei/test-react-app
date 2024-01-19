import React, { PureComponent } from 'react'
import enhancedUserInfo from './hoc/enhanced'
import About from './About'
const Profile = enhancedUserInfo(function (props) {
  return <h1>Profile: {props.name} {props.level}</h1>
})
const Home = enhancedUserInfo(function (props) {
  return <h1>Home: {props.name} {props.level} {props.banners}</h1>
})
export class App extends PureComponent {
  render() {
    return (
      <div>
        <Profile></Profile>
        <Home banners={['1', '2']}></Home>
        <About></About>
      </div>
    )
  }
}

export default App