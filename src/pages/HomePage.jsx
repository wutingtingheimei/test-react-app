import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumber } from "../store/features/counter";
import { fetchHomeMultidataAction } from "../store/features/home";
// import store from "../store";
// import { changeBanners, changeRecommends } from "../store/features/home";
export class Home extends PureComponent {
  componentDidMount () {
    this.props.fetchHomeMultidata()

    // store.dispatch(changeBanners(banners))
    // store.dispatch(changeRecommends(recommends))
  }

  addNumber(num) {
    this.props.addNumber(num)
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2>home Counter: {counter}</h2>
        <button onClick={(e) => this.addNumber(1)}>+ 1</button>
        <button onClick={(e) => this.addNumber(3)}>+ 3</button>
        <button onClick={(e) => this.addNumber(8)}>+ 8</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num));
  },
  fetchHomeMultidata  () {
    dispatch(fetchHomeMultidataAction({name: '好好好',age: 18}))
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
