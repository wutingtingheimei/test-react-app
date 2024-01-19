import React, { PureComponent, createRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

// react-transition-group 提供四个组件： Transition CSSTransition SwitchTransition TransitionGroup
export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isShowTitle: true,
    };

    this.sectionRef = createRef()
  }
  render() {
    const { isShowTitle } = this.state;
    return (
      <div>
        <button onClick={(e) => this.setState({ isShowTitle: !isShowTitle })}>
          切换
          {/* {isShowTitle && <h2>哈哈哈哈哈哈哈哈哈哈哈哈</h2>} */}
        </button>
        {/* in 赋值true 或者false */}
        {/* classNames 动画名称 */}
        {/* unmountOnExit 退出的时候卸载掉组件 */}
        {/* timeout动画执行时间 */}
        {/* appear 是否在初次进入添加动画 */}
        {/*   nodeRef={this.sectionRef} 解决严格模式下的findDOMNode 警告 */}
        <CSSTransition
          in={isShowTitle}
          classNames="why"
          nodeRef={this.sectionRef}
          timeout={2000}
          unmountOnExit={true}
          appear
          onEnter={e => {console.log('开始进入动画')}}
          onEntering={e=> { console.log('执行进入动画')}}
          onEntered={e=>{console.log('执行进入结束')}}
          onExit={e=>{console.log('开始离开动画')}}
          onExiting={e=>{console.log('执行离开动画')}}
          onExited={e=>{console.log('执行离开结束')}}
        >
          <div className="section" ref={this.sectionRef}>
            <h2>哈哈哈哈</h2>
            <h1>css transition 动画</h1>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
