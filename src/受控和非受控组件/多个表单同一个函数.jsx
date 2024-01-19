import React, { PureComponent, createRef } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      isAgree: true,
      hobbies: [
        { value: "sing", text: "唱", isChecked: false },
        { value: "dance", text: "跳", isChecked: false },
        { value: "rap", text: "Rap", isChecked: false },
      ],
      // fruit: '苹果' //单选
      fruit: ["苹果"],
      intro: "自我介绍",
    };
    this.introRef = createRef();
  }
  componentDidMount() {
    // console.log(this.introRef.current.addEventListener)
  }

  handleSubmitClick(event) {
    // 1.阻止默认的行为
    event.preventDefault();
    // 2.获取到所有的表单数据，对数据进行组件
    console.log("获取所有输入的内容");
    // console
    //   .log(
    //     "爱好",
    //     this.state.hobbies.filter((item) => item.isChecked)
    //   )
    //   .map((item) => {
    //     return item.value;
    //   });
    console.log(this.introRef.current.value);
  }
  handleInputText(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  // 单选
  handleInputChecked(event) {
    this.setState({
      isAgree: event.target.checked,
    });
  }
  // 多选
  handleHobbiesChecked(event, index) {
    const hobbies = [...this.state.hobbies];
    hobbies[index].isChecked = event.target.checked;
    this.setState({
      hobbies,
    });
  }
  handleFruitChange(event) {
    // 单选
    // this.setState({
    //   fruit: event.target.value
    // })
    // 把可迭代的对象变成数组 Array.form(可迭代对象) Array.form(arguments)
    // Array.form(event.target.selectedOptions,item =>item.value) //可传入另外一个参数
    const options = Array.from(event.target.selectedOptions);
    const values = options.map((item) => item.value);
    console.log(values);
    console.log(event.target.selectedOptions, "选中的所有options");
    this.setState({
      fruit: values,
    });
  }
  render() {
    const { username, password, isAgree, hobbies, fruit, intro } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
          <div>
            <label>
              用户名：
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => this.handleInputText(e)}
              ></input>
            </label>
          </div>
          <div>
            <label>
              密码：
              <input
                value={password}
                id="password"
                name="password"
                onChange={(e) => this.handleInputText(e)}
              ></input>
            </label>
          </div>

          {/* checkbox */}
          {/* checkbox是绑定checked,不是value */}
          <label htmlFor="agree">
            <input
              type="checkbox"
              checked={isAgree}
              onChange={(e) => this.handleInputChecked(e)}
              id="agree"
            />
            同意协议
          </label>

          {/* 多选checkbox */}
          <div>
            您的爱好
            {hobbies.map((item, index) => {
              return (
                <label htmlFor={item.value} key={item.value}>
                  {item.text}
                  <input
                    type="checkbox"
                    checked={item.isChecked}
                    onChange={(e) => this.handleHobbiesChecked(e, index)}
                    id={item.value}
                  />
                </label>
              );
            })}
          </div>
          {/* select 多选和单选*/}
          <div>
            <select
              value={fruit}
              onChange={(e) => this.handleFruitChange(e)}
              multiple
            >
              <option value="apple">苹果</option>
              <option value="banana">香蕉</option>
              <option value="orange">橘子</option>
            </select>
          </div>
          {/* 非受控组件 不是react管理 */}
          <input type="text" defaultValue={intro} ref={this.introRef}></input>
          <button type="submit">注册</button>
        </form>
      </div>
    );
  }
}

export default App;
