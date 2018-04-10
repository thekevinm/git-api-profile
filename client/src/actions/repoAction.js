import store from '../services/store'
import axios from 'axios'

export function getRepos(userName) {
	axios.get('http://api.github.com/users/' + userName).then(resp => {
		const user = resp.data
		axios.get('http://api.github.com/users/' + userName + './repos').then(resps => {
			const repos = resps.data
			store.dispatch({
				type: "GET_USER",
				payload: {
					user: user,
					repos: repos
				}
			})
		})
	})
}