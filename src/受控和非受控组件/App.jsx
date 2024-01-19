import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      userName: "heihei",
    };
  }
  inputChange(event) {
    console.log("event对象", event.target.value);
    this.setState(
      {
        userName: event.target.value,
      },
      () => {
        console.log(this.state.userName, "名字");
      }
    );
  }
  render() {
    const { userName } = this.state;
    return (
      <div>
        {/* 绑定value就变成受控组件 */}
        <input type="text" value={userName} onChange={e=>this.inputChange(e)}></input>
        {/*非受控组件*/}
        <input></input>
        <h2>username：{userName}</h2>
      </div>
    );
  }
}

export default App;
