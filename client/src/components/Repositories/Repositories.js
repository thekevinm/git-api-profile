import React, {Component} from 'react'
import {connect} from 'react-redux'

export class Repositories extends Component {
	static defaultProps = {
		repos: []
	}
	render() {
		return (
		<div className="repoContainer">
        	<div className="searchContainer">
          		<input className="repoSearch" type="text" placeholder="Search Repos" /><select><option>Add</option></select><select><option>Language</option></select>
        	</div>
        	{this.props.repos.map(repo => {
        		return 	<div className="repoContent">
            				<p className="bottomP">{repo.name}</p>
            				<h5>{repo.language}</h5>
          				</div>
        	})}
        </div>
		)
	}
}
function mapStateToProps(state) {
    return {
        repos: state.repoReducer.data.repos
    }
}

export default connect(mapStateToProps)(Repositories)