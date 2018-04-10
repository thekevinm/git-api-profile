import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getRepos} from '../../actions/repoAction'

export class Search extends Component {
  static defaultProps = {
    searchValue: {},
    user: {}
  }
  state = {
    searchValue: ''
  }
  searchValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    getRepos(this.state.searchValue)
    this.setState({
      searchValue: ''
    })
  }
  render() {
    return(
      <header>
        <div className="headStuff">
          <div className="searchStuff">
            <img alt="pictur" width="50px" src="https://www.shareicon.net/download/2016/08/01/639872_development.svg" />
            <form onSubmit={this.handleSubmit}>
            <input onChange={this.searchValue} value={this.state.searchValue} className="bigInput" type="text" placeholder="Search Users" />
            </form>
          </div>
          <div className="miscStuff">
            <p className="topP">Pull requests</p>
            <p className="topP">Issues</p>
            <p className="topP">Marketplace</p>
            <p className="topP">Explore</p>
          </div>
          <div className="smallImg">
            <img alt="pictu" src={this.props.user.avatar_url} />
          </div>
          </div>
        </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    user:state.repoReducer.data.user
  }
}

export default connect(mapStateToProps)(Search)
