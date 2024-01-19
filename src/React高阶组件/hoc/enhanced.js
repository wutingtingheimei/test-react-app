
import React, { PureComponent } from 'react'
//定义组件:给一些需要特殊组件的数据，注入props
function enhancedUserInfo (OriginComponent) {
  class NewComponent extends PureComponent {
    constructor () {
      super()
      this.state = {
        userInfo: {
          name:'高阶组件',
          level: 12
        }
      }
    }
    render () {
      return <OriginComponent {...this.props}{...this.state.userInfo}></OriginComponent>
    }
  }

  return NewComponent

}


export default enhancedUserInfo