import {createStore, combineReducers} from 'redux'
import repoReducer from '../reducers/repoReducer'
// import reducers here

const rootReducer = combineReducers(
  { 
    'repoReducer': repoReducer
    // namespace your reducers here
  }
)

export default createStore(rootReducer)