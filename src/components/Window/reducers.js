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
    state.datas = state.datas.del(parseInt(action.datas.id));
    return Object.assign({}, state);
  },
  [WINDOW_MOVE]: (state, action) => {
    state.datas[action.datas.id] = Object.assign({}, state.datas[action.datas.id], action.datas);
    return Object.assign({}, state)
  }
})
