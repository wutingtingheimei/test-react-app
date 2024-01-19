import React, { PureComponent } from "react";
// rpce
// 定义一个高阶组件
function hoc(Cpn) {
  // 1.定义类组件
  class NewCpn extends PureComponent {

    render () {
      return <Cpn></Cpn>
    }
  }
  // 定义函数组件
  // function NewCpn2(props) {}
  return NewCpn;
}


class HelloWord extends PureComponent {
  render() {
    return <h1>Hello Word</h1>
  }
}


const HelloWordHOC = hoc(HelloWord)
export class App extends PureComponent {
  render() {
    return <div>
      <HelloWordHOC></HelloWordHOC>
    </div>;
  }
}



export default App;
