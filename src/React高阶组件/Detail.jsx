import React, { PureComponent } from "react";
import logRenderTime from "./hoc/log_render_time";

export class Detail extends PureComponent {
  // 即将被挂载 不建议使用
  // componentWillUnmount () {
  // }
  // UNSAFE_componentWillMount() {
  //   this.beginTime = new Date().getTime()
  // }
  // componentDidMount () {
  //   this.endTime = new Date().getTime()
  //   const interval = this.endTime -  this.beginTime
  //   console.log(`页面渲染花了${interval}ms完成`)
  // }
  render() {
    return (
      <div>
        <h1>detail page</h1>
        <ul>
          <li>数据列表1</li>
          <li>数据列表2</li>
          <li>数据列表3</li>
          <li>数据列表4</li>
          <li>数据列表5</li>
          <li>数据列表6</li>
          <li>数据列表7</li>
          <li>数据列表8</li>
          <li>数据列表9</li>
          <li>数据列表10</li>
        </ul>
      </div>
    );
  }
}

export default logRenderTime(Detail);
