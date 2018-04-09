import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css' 



class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <header>
        <div className="headStuff">
          <div className="searchStuff">
            <img alt="pictur" width="50px" src="https://png.icons8.com/metro/1600/github.png" />
            <input className="bigInput" type="text" placeholder="Search Users" />
          </div>
          <div className="miscStuff">
            <p className="topP">Pull requests</p>
            <p className="topP">Issues</p>
            <p className="topP">Marketplace</p>
            <p className="topP">Explore</p>
          </div>
          <div className="smallImg">
            <img alt="pictu" src="https://placehold.it/25/25" />
          </div>
        </div>
        </header>

        <div className="mainContainer">
        <div className="leftSide">
          <img alt="pict" width="200px" src="https://placehold.it/200/200" />
          <h2>Name</h2>
          <h5>username</h5>
        </div>

        <div className="repoContainer">
        <div className="searchContainer">
          <input className="repoSearch" type="text" placeholder="Search Repos" /><select><option>Add</option></select><select><option>Language</option></select>
        </div>
          <div className="repoContent">
            <p className="bottomP">repo name</p>
            <h5>language</h5>
          </div>
        </div>
        </div>
          
          {/* Layout goes here */}
          {/* Routes go here */}
        </div>
      </Router>
    )
  }
}

export default App
