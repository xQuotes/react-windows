import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import win from '../components/Window/reducers'

const rootReducer = combineReducers({
  win,
  routing: routerReducer
})

export default rootReducer