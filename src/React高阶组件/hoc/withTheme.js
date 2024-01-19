import ThemeContext from "../context/themeContext"

function withTheme (OriginComponent) {
  return (props) => {
    return (
      <ThemeContext.Consumer>
        {
          value=>{
            return <OriginComponent {...props} {...value}></OriginComponent>
          }
        }
      </ThemeContext.Consumer>
    )
  }
}


export default withTheme