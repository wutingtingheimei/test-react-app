import React, { PureComponent } from 'react'
import {connect} from '../hoc'
import { addNumber } from '../store/features/counter.js'

export class About extends PureComponent {
  render() {
    const {counter} = this.props
    return (
      <div>about Counter : {counter}</div>
    )
  }
}


const mapStateToProps  = (state) => ({
  counter: state.counter.counter


})
const mapDispatchToProps  =  (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num))
  }

})
export default connect(mapStateToProps,mapDispatchToProps )(About)


// 自定义connect函数
// 高阶函数加高阶组件
