import { createReducer } from '../../common/js/Tools'

import {
  DESKTOP_SHOW
} from './actions'

let initialState = {
  display: false,
  datas: {}
}

export default createReducer(initialState, {
  [DESKTOP_SHOW]: (state, action) => Object.assign({}, state, {
    display: true
  })
})
