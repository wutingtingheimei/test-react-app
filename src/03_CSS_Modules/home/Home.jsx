import React, { PureComponent } from 'react'
// import './Home.css'
import homeStyle from './Home.module.css'
export class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={homeStyle.title}>Home的标题</h2>
      </div>
    )
  }
}

export default Home


