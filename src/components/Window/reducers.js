import { createReducer } from '../../common/js/Tools'

import {
  WINDOW_SHOW,
  WINDOW_HIDE,
  WINDOW_MOVE,
  WINDOW_UP,
  WINDOW_MAX,
  WINDOW_MIN,
  WINDOW_DISPLAY
} from './actions'

let initialState = {
  datas: {}
}

export default createReducer(initialState, {
  [WINDOW_SHOW]: (state, action) => {
    if(!state.datas[action.datas.id])
      state.datas[action.datas.id] = action.datas;
    return Object.assign({}, state);
  },
  [WINDOW_HIDE]: (state, action) => {
    //对象删除
    delete state.datas[action.datas.id];
    return Object.assign({}, state);
  },
  [WINDOW_MOVE]: (state, action) => {
    state.datas[action.datas.id] = Object.assign(
      {},
      state.datas[action.datas.id],
      action.datas
    );
    return Object.assign({}, state);
  },
  [WINDOW_UP]: (state, action) => {
    var datas = state.datas[action.datas.id];
    delete state.datas[action.datas.id];
    state.datas[action.datas.id] = datas;
    return Object.assign({}, state);
  },
  [WINDOW_MAX]: (state, action) => {
    if (action.datas.preData) {
      var datas = state.datas[action.datas.id].preData;
      state.datas[action.datas.id].preData = false;
    } else {
      action.datas.preData = state.datas[action.datas.id];
      var datas = action.datas;
    }
    state.datas[action.datas.id] = Object.assign(
      {},
      state.datas[action.datas.id],
      datas
    );
    return Object.assign({}, state);
  },
  [WINDOW_MIN]: (state, action) => {
    state.datas[action.datas.id] = Object.assign(
      {},
      state.datas[action.datas.id],
      action.datas
    );
    return Object.assign({}, state);
  },
  WINDOW_DISPLAY: (state, action) => {
    if(!!state.datas[action.datas.id])
      state.datas[action.datas.id] = Object.assign(
        {},
        state.datas[action.datas.id],
        action.datas
      );
    return Object.assign({}, state);
  }
})
