import React, { PureComponent } from 'react'
import store from '../store'
import { addNumberAction } from '../store/features/counter'
export class home extends PureComponent {
  componentDidMount () {
    store.subscribe(() => {
      const state = store.getState().counter
      this.setState({counter: state.counter})
    })
  }
  constructor () {
    super()
    this.state  ={
      counter:store.getState().counter.counter,
      message:'home page'
    }
  }
  addNumber (num) {
    store.dispatch(addNumberAction(num))

  }
  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>home Counter: {counter}</h2>
        <button onClick={e => this.addNumber(1)}>+ 1</button>
        <button onClick={e => this.addNumber(3)}>+ 3</button>
        <button onClick={e => this.addNumber(8)}>+ 8</button>
      </div>
    )
  }
}

export default home