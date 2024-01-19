
// connect 参数
// 参数一： 函数
// 参数二： 函数
// 返回值： 函数=>高阶组件


// import store from "../store";
import { PureComponent } from "react";
import { StoreContext } from "./StoreContext";

export  function connect (mapStateToProps, mapDispatchToProps) {
  // 高阶组件： 函数  接收一个组件 返回一个组件
  return function (WrapperComponent){
    class NewComponent extends PureComponent {
      constructor (props, context) {
        super(props)
        this.state = mapStateToProps(context.getState())
      }
      componentDidMount () {
        // 监听store的改变
        this.unsubscribe  = this.context.subscribe(() => {
          // this.forceUpdate()
          this.setState(mapStateToProps(this.context.getState()))
        })
      }
      // 卸载时取消监听
      componentWillUnmount () {
        this.unsubscribe()
      }
      render () {
        const stateObj = mapStateToProps(this.context.getState())
        const dispatchObj = mapDispatchToProps(this.context.dispatch)
        return <WrapperComponent {...this.props} {...stateObj} {...dispatchObj}></WrapperComponent>
      }
    }

    NewComponent.contextType = StoreContext
    return NewComponent

  }
}


// store的解耦
