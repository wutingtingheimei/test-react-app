import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      books: [
        { name: "你不知道js", price: 99, count: 1 },
        { name: "JS高级程序设计", price: 88, count: 1 },
        { name: "React高级设计", price: 78, count: 2 },
        { name: "Vue高级设计", price: 95, count: 2 },
      ],
    };
  }
  addNewBook () {
    // 不要直接去改state ！！！！
    const newBook = {name: 'Angular设计', price: 99, count: 1}
    // 1.在PureComponent中是不会重新渲染的
    // this.state.books.push(newBook)
    // this.setState({ books: this.state.books})


    // 2.复制一份books 修改新的books 重新赋值可以渲染
    const books = [...this.state.books]
    books.push(newBook)
    this.setState({books: books})
  }
  addBookCount (index) {
    console.log('点击加1', index)
    // this.state.books[index].count++
    // this.setState({books: this.state.books})
    const books=  [...this.state.books]
    books[index].count++
    this.setState({books: books})

  }
  // PureComponent的源码的操作
  // shouldComponentUpdate (nextProps,nextState) {
  //   shallowEqual(nextProps, this.props) //shallowEqual浅层比较
  //   shallowEqual(nextProps, this.state) //shallowEqual浅层比较
  // }
  render() {
    const { books } = this.state;
    return (
      <div>
        <ul>
          {books.map((item,index) => {
            return <li key={item.name}>
              <span>名字：{item.name}-售价：{item.price} -数量：{item.count}</span>
              <button onClick={(e)=>this.addBookCount(index)}>+1</button>
            </li>;
          })}
        </ul>

        <button onClick={e =>this.addNewBook()}>添加新书籍</button>
      </div>
    );
  }
}

export default App;
