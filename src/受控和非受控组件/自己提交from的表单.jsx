import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      username:'',
      password: ''
    }
  }

  handleSubmitClick(event) {
    // 1.阻止默认的行为
    event.preventDefault()
    // 2.获取到所有的表单数据，对数据进行组件
    console.log('获取所有输入的内容')
    console.log(this.state)
  }
  handleInputText (event) {
    this.setState({
      [event.target.name]: event.target.value
    })

  }
  render() {
    const {username, password} = this.state
    return (
      <div>
        <form onSubmit={e=>this.handleSubmitClick(e)}>
          <label>
            用户名：
            <input type="text" id="username" name="username" value={username} onChange={e => this.handleInputText(e)}></input>
          </label>
          <label>
            密码： 
            <input value={password} id="password"  name="password" onChange={e => this.handleInputText(e)}></input>
          </label>
          <button type="submit">注册</button>
        </form>
      </div>
    )
  }
}

export default App