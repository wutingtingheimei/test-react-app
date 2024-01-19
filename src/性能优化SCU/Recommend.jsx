import React, { PureComponent } from 'react'

export class Recommend extends PureComponent {
  // shouldComponentUpdate (nextProps, nextState) {
  //   if(this.props.counter !== nextProps.counter){
  //     return true
  //   } else {
  //     return false
  //   }
    
  // }
  render() {
    console.log('Recommend -render')
    return (
      <div>Recommend</div>
    )
  }
}

export default Recommend