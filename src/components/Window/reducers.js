import { createReducer } from '../../common/js/Tools'

import {
  WINDOW_SHOW,
  WINDOW_HIDE,
  WINDOW_MOVE
} from './actions'

let initialState = {
  datas: []
}

export default createReducer(initialState, {
  [WINDOW_SHOW]: (state, action) => {
    state.datas.push(action.datas);
    return Object.assign({}, state);
  },
  [WINDOW_HIDE]: (state, action) => {
    console.log(action);
    Object.assign({}, state, {
      display: false
    })
  },
  [WINDOW_MOVE]: (state, action) => Object.assign({}, state, {
    display: true,
    datas: Object.assign({}, state.datas, action.datas)
  })
})
