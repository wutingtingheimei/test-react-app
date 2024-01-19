import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { subNumber } from "../store/features/counter";
export class Profile extends PureComponent {

  reduceNumber (num) {
    this.props.subNumber(num)
  }
  render() {
    const { counter, banners, recommends } = this.props;
    return (
      <div>
        <h2>profile Counter: {counter}</h2>
        <button onClick={e => this.reduceNumber(1)}>- 1</button>
        <button onClick={e => this.reduceNumber(3)}>- 3</button>
        <button onClick={e => this.reduceNumber(8)}>- 8</button>
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


const mapStateToProps  =  (state)=> ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommends: state.home.recommends
})


const mapDispatchToProps = (dispatch)=> ({
  subNumber (num) {
    dispatch(subNumber(num))
  }

})
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
