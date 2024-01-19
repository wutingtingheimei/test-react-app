import React, { PureComponent } from 'react'
import Home from './home'
import Profile from './profile'
import store  from '../store'
import Category from './category'
import About from './about'
import './style.css'
export class App extends PureComponent {

  componentDidMount () {
    store.subscribe(() => {
      const state = store.getState().counter
      this.setState({counter: state.counter})
    })
  }
  constructor () {
    super()
    this.state  ={
      counter:store.getState().counter.counter
    }
  }
  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>App Counter: {counter}</h2>
        <div className='pages'>
          <Home></Home>
          <Profile></Profile>
          <About></About>
          <Category></Category>
        </div>
      </div>
      
    )
  }
}

export default App