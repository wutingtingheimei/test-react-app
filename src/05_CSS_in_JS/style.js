import styled from "styled-components";
import {primaryColor, defaultSize, defaultColor} from './style/variables'
// ``模板字符串

// `` 作为函数调用
// 1.基本使用
export const AppWrapper = styled.div`
  .section {
    border: 1px solid ${primaryColor};
  }
  .footer {
    border: 1px solid orange;
  }
`;


// 2.子元素单独抽取到一个样式组件
// 3.可以接受外部传入的props
// 4.添加attrs属性 可以通过attrs给标签模板字符串中提供属性
// 5.从单独文件中引入变量
// 6.可以通过themeProvider提供全局变量
export const SectionWrapper = styled.div.attrs(props =>{return {tcolor: props.color||'skyblue'}})`
  border: 1px solid green;
  .title {
    font-size: ${({size}) =>size}px;
    color: ${props=>props.tcolor};
    &:hover {
      background-color: pink;
    }
  }
  .content {
    font-size: ${defaultSize};
    color: ${defaultColor};
  }
`;



