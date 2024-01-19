import React, { PureComponent } from "react";
import store from "../store";
import { subNumberAction } from "../store/features/counter";
export class profile extends PureComponent {
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState().counter
      this.setState({ counter: state.counter });
    });
  }
  constructor() {
    super();
    this.state = {
      counter: store.getState().counter.counter,
    };
  }

  reduceNumber (num) {
    store.dispatch(subNumberAction(num))

  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>profile Counter: {counter}</h2>
        <button onClick={e => this.reduceNumber(1)}>- 1</button>
        <button onClick={e => this.reduceNumber(3)}>- 3</button>
        <button onClick={e => this.reduceNumber(8)}>- 8</button>
      </div>
    );
  }
}

export default profile;
