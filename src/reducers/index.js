import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import win from '../components/Window/reducers'
import desk from '../components/Desktop/reducers'

const rootReducer = combineReducers({
  desk,
  win,
  routing: routerReducer
})

export default rootReducer