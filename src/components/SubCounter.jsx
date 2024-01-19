import React, { Component } from "react";
// import PropTypes from "prop-types";
export class Banner extends Component {
  // 新写法
  // 默认值
  subCounter(count) {
    this.props.subClick(count);
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.subCounter(-1)}>-1</button>
        <button onClick={(e) => this.subCounter(-5)}>-5</button>
        <button onClick={(e) => this.subCounter(-10)}>-10</button>
      </div>
    );
  }
}

export default Banner;
