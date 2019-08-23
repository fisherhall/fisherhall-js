import React, { Component } from "react"
import Sermons from "./sermons"
import logo from "./logo.svg"
import { BrowserRouter } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Sermons series={[]} onNavBarClick={() => {}} />
      </BrowserRouter>
    )
  }
}

export default App
