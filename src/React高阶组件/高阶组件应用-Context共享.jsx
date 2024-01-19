import React, { PureComponent } from 'react'
import ThemeContext from './context/themeContext'
import Product from './Product'
export class App extends PureComponent {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{color: 'red',size:30}}>
          <Product></Product>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App