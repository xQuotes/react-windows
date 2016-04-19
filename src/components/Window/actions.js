export const WINDOW_SHOW = 'WINDOW_SHOW'
export const WINDOW_HIDE = 'WINDOW_HIDE'
export const WINDOW_MOVE = 'WINDOW_MOVE'

import windows from '../../datas/window'

export function showWindow(datas) {
  return (dispatch, getState) => {
    dispatch({
      type: WINDOW_SHOW,
      datas: windows[datas.id]
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
