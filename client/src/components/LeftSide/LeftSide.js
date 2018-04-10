import React, {Component} from 'react'
import {connect} from 'react-redux'

export class LeftSide extends Component {
	static defaultProps = {
		user: {}
	}
	render() {
		return (
			<div className="mainContainer">
        		<div className="leftSide">
         		<img alt="https://placehold.it/200/200" width="200px" src={this.props.user.avatar_url} />
          		<h2>{this.props.user.name}</h2>
          		<h5>{this.props.user.login}</h5>
        	</div>
        	</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.repoReducer.data.user
	}
}

export default connect(mapStateToProps)(LeftSide)