import ThemeContext from "./context/ThemeContext";

function HomeBanner() {
  return (
    <div>
      HomeBanner
      {/* 函数式组件中使用Context共享的数据 */}
      {/* Consumer 和flutter很像 */}
      {/* Consumer意思是消费者 */}
      <ThemeContext.Consumer>
        {(value) => {
          return <h2>Banner Theme : {value.color}</h2>;
        }}
      </ThemeContext.Consumer>
    </div>
  );
}
export default HomeBanner;
