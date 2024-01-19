import React, { PureComponent } from 'react'
import Home from './HomePage'
import Profile from './Profile'
import './style.css'
import { connect } from "react-redux";
import About from './About.jsx';
export class App extends PureComponent {
  render() {
    const {counter} = this.props
    return (
      <div>
        <h2>App Counter: {counter}</h2>
        <div className='pages'>
          <Home></Home>
          <Profile></Profile>
          <About></About>
        </div>
      </div>
      
    )
  }
}


const mapStateToProps = (state) => ({
  counter: state.counter.counter
})


// connect 将store数据和props关联
export default connect(mapStateToProps)(App)