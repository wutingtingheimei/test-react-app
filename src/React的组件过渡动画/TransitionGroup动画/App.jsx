import React, { PureComponent } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./style.css";
export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      books: [
        { name: "你不知道js", price: 99, count: 1, id: 1 },
        { name: "JS高级程序设计", price: 88, count: 1, id: 2  },
        // { name: "React高级设计", price: 78, count: 2 },
        { name: "Vue高级设计", price: 95, count: 2 , id: 3 },
      ],
    };
  }
  addBooks() {
    const books = [...this.state.books];
    books.push({ name: "React高级设计", price: 78, count: 2,id: new Date().getTime() });
    this.setState({ books });
  }
  removeBook(index) {
    const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({ books });
  }
  render() {
    const { books } = this.state;
    return (
      <div>
        {/* component 渲染成别的标签属性 */}
        <TransitionGroup component="ul">
          {books.map((item, index) => {
            return (
              <CSSTransition key={item.id} timeout={{
                appear: 500,
                enter: 1000,
                exit: 1000
              }} classNames="book">
                <li>
                  <span>
                    {item.name} {item.price}
                  </span>
                  <button onClick={(e) => this.removeBook(index)}>删除</button>
                </li>
              </CSSTransition>
            );
          })}
        </TransitionGroup>

        <button onClick={(e) => this.addBooks()}>添加书籍</button>
      </div>
    );
  }
}

export default App;
