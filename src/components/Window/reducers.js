import {
  WINDOW_SHOW,
  WINDOW_HIDE
} from './actions'

let initialState = {
  display: false
}

export default createReducer(initialState, {
  [WINDOW_SHOW]: (state, action) => merge({
    display: true
  }),
  [WINDOW_HIDE]: (state, action) => merge({
    display: false
  })
})