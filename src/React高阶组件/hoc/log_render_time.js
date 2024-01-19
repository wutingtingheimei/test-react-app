import { PureComponent } from "react";

function logRenderTime (OriginComponent) {
  return  class extends PureComponent{
    render () {
      console.log(origin, 'origin')
      return <OriginComponent {...this.props}></OriginComponent>
    }
  }
}


export default logRenderTime
