import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css'
import Search from '../Search/Search' 
import LeftSide from '../LeftSide/LeftSide'
import Repositories from '../Repositories/Repositories'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
        
        <Search />

        <LeftSide />

        <Repositories />
          
          {/* Layout goes here */}
          {/* Routes go here */}
        </div>
      </Router>
    )
  }
}

export default App
