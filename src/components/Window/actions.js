export const WINDOW_SHOW = 'WINDOW_SHOW'
export const WINDOW_HIDE = 'WINDOW_HIDE'
export const WINDOW_MOVE = 'WINDOW_MOVE'
export const WINDOW_UP = 'WINDOW_UP'

import windows from '../../datas/window'

export function showWindow(datas) {
  return (dispatch, getState) => {
    var key = datas.id;
    dispatch({
      type: WINDOW_SHOW,
      datas: windows[key]
    })
  }
}

export function hideWindow(datas) {
  return (dispatch, getState) => {
    dispatch({
      type: WINDOW_HIDE,
      datas: datas
    })
  }
}

export function moveWindow(datas) {
  return (dispatch, getState) => {
    dispatch({
      type: WINDOW_MOVE,
      datas: datas
    })
  }
}

export function upWindow(datas) {
  return (dispatch, getState) => {
    dispatch({
      type: WINDOW_UP,
      datas: datas
    })
  }
}
