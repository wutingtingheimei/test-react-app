import React, { PureComponent, createRef, forwardRef} from "react";

// class HelloWord extends PureComponent {
//   // 通过实例拿到这个方法
//   test() {
//     console.log("2");
//   }
//   render() {
//     return <h1>HelloWord</h1>;
//   }
// }

 // 函数组件获取实例,函数式组件没有实例,获取不到对应组件的对象 ,通过forwardRef获取dom
const HelloWord = forwardRef(function  (props,ref) {
  return (<h1 ref={ref}>HelloWord</h1>)
})
export class App extends PureComponent {
  // 获取helloWord的组件实例
  getComponent() {
    console.log(this.hewRef.current, '组件实例')
    // this.hewRef.current.test()
  }

 
  constructor() {
    super();
    this.state = {};
    this.hewRef  = createRef()
  }
  render() {
    return (
      <div>
        <HelloWord ref={this.hewRef}/>
        <button onClick={(e) => this.getComponent()}>获取dom</button>
      </div>
    );
  }
}

export default App;
