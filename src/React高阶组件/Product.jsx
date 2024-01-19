import React, { PureComponent } from 'react'
// import ThemeContext from './context/themeContext'
import withTheme from './hoc/withTheme'
export class Product extends PureComponent {
  render() {
    return (
      <div>
        Product:
        {this.props.color} {this.props.size}
        {/* <ThemeContext.Consumer>
          {
            value=> {
              return <h2>theme: {value.color} -{value.size}</h2>
            }
          }
        </ThemeContext.Consumer> */}
      </div>
    )
  }
}

export default withTheme(Product)