import { createReducer } from '../../common/js/Tools'

import {
  WINDOW_SHOW,
  WINDOW_HIDE,
  WINDOW_MOVE
} from './actions'

let initialState = {
  'window1': {
    display: true,
    id: 'window1',
    title: 'window1',
    top: 400,
    left: 300
  },
  'window2': {
    display: true,
    id: 'window2',
    title: 'window2',
    top: 300,
    left: 400
  }
}

export default createReducer(initialState, {
  [WINDOW_SHOW]: (state, action) => {
    state.datas[action.datas.id] = action.datas;
    return Object.assign({}, state, {
      datas: Object.assign({}, state.datas, action.datas)
    })
  },
  [WINDOW_HIDE]: (state, action) => Object.assign({}, state, {
    display: false
  }),
  [WINDOW_MOVE]: (state, action) => Object.assign({}, state, {
    display: true,
    datas: Object.assign({}, state.datas, action.datas)
  })
})
