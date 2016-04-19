import { createReducer } from '../../common/js/Tools'

import {
  WINDOW_SHOW,
  WINDOW_HIDE,
  WINDOW_MOVE
} from './actions'

let initialState = {
  display: false,
  datas: {
    id: 'window',
    top: 300,
    left: 400
  }
}

export default createReducer(initialState, {
  [WINDOW_SHOW]: (state, action) => {
    return Object.assign({}, state, {
      display: true,
      datas: Object.assign({}, state.datas, action.datas)
    })
  },
  [WINDOW_HIDE]: (state, action) => Object.assign({}, state, {
    display: false
  }),
  [WINDOW_MOVE]: (state, action) => Object.assign({}, state, {
    display: true,
    datas: action.datas
  })
})
