import { createReducer } from '../../common/js/Tools'
import { merge } from 'lodash'

import {
  WINDOW_SHOW,
  WINDOW_HIDE,
  WINDOW_MOVE
} from './actions'

let initialState = {
  display: false,
  widowData: {}
}

export default createReducer(initialState, {
  [WINDOW_SHOW]: (state, action) => merge({
    display: true
  }),
  [WINDOW_HIDE]: (state, action) => merge({
    display: false
  }),
  [WINDOW_MOVE]: (state, action) => merge({
    datas: action.datas
  })
})