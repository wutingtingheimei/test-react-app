import React, { Component } from "react";
// import PropTypes from "prop-types";
export class Banner extends Component {
  // 新写法
  // 默认值
  addCounter(count) {
    this.props.addClick(count);
  }
  render() {
    const { banners, productList } = this.props;
    return (
      <div>
        <ul>
          {banners.map((item) => {
            return <li key={item.acm}>{item.title}</li>;
          })}
        </ul>

        <ul>
          {productList.map((item) => {
            return <li key={item.acm}>{item.title}</li>;
          })}
        </ul>
        <button onClick={(e) => this.addCounter(1)}>+1</button>
        <button onClick={(e) => this.addCounter(5)}>+5</button>
        <button onClick={(e) => this.addCounter(10)}>+10</button>
      </div>
    );
  }
}

export default Banner;
