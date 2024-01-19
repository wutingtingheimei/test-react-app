import React, { PureComponent, Fragment } from "react";

// Fragment (片段) vue3中多个根就是用Fragment包裹起来了
export class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      sections: [
        {
          title: '嘻嘻',content: '内容1'
        },
        {
          title: '哈哈哈哈',content: '内容2'
        },
        {
          title: '嘿嘿',content: '内容3'
        },
        {
          title: '呜呜',content: '内容4'
        }
      ]
    }
  }
  render() {
    const {sections} = this.state
    return (
      // <Fragment>
      //   <h2>标题</h2>
      //   <p>内容</p>
      // </Fragment>
      <>
        <h2>标题</h2>
        <p>内容</p>
        {
          sections.map(item => {
            return (
              <Fragment key={item.title}>
                <h2>{item.title}</h2>
                <h2>{item.content}</h2>
              </Fragment>
            )
          })
        }
      </>
    );
  }
}

// Fragment的语法糖 <></>
// Fragment需要添加key的时候不能使用语法糖
export default App;
