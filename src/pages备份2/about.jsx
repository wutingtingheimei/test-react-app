import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumberAction, subNumberAction } from "../store/features/counter";

// 将store和react组件连接起来
export class About extends PureComponent {
  // 如何dispatch， 进行一个解耦操作
  changeNumber(num, isAdd) {
    if (isAdd) {
      this.props.addNumber(num);
    } else {
      this.props.subNumber(num);
    }
  }
  render() {
    const { counter, banners, recommends, userInfo } = this.props;
    return (
      <div>
        <h2>About Page: </h2>
        <div className="user">
          {userInfo.nickName} {userInfo.level}
        </div>
        {counter}
        <button onClick={(e) => this.changeNumber(1, true)}>+ 1</button>
        <button onClick={(e) => this.changeNumber(3, false)}>- 3</button>
        <button onClick={(e) => this.changeNumber(8, true)}>+ 8</button>
        <button onClick={(e) => this.changeNumber(10, false)}>- 10</button>
        <div className="banner">
          <h2>轮播图数据：</h2>
          <ul>
            {banners.map((item, index) => {
              return <li key={item.title}>{item.title}</li>;
            })}
          </ul>
        </div>
        <div className="recommend">
          <h2>推荐商品数据： </h2>
          <ul>
            {recommends.map((item, index) => {
              return <li key={item.title}>{item.title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     counter: state.counter
//   }
// }

// 写成箭头函数
const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommends: state.home.recommends,
  userInfo: state.user.userInfo

});

// function fn2(dispatch) {
//   return {
//     addNumber  (num) {
//       dispatch(addNumberAction(num))
//     },
//     subNumber(num) {
//       dispatch(subNumberAction(num))
//     }
//   }
// }

const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => dispatch(addNumberAction(num)),
  subNumber: (num) => dispatch(subNumberAction(num)),
});
// connect()返回值是一个高阶组件,传入两个参数： 一是state有关函数， 二是dispatch有关函数
export default connect(mapStateToProps, mapDispatchToProps)(About);
