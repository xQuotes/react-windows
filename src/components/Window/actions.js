export const WINDOW_SHOW = 'WINDOW_SHOW'
export const WINDOW_HIDE = 'WINDOW_HIDE'
export const WINDOW_MOVE = 'WINDOW_MOVE'
export const WINDOW_UP = 'WINDOW_UP'
export const WINDOW_MAX = 'WINDOW_MAX'
export const WINDOW_MIN = 'WINDOW_MIN'
export const WINDOW_DISPLAY = 'WINDOW_DISPLAY'

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

export function maxWindow(datas, preData) {
  return (dispatch, getState) => {
    dispatch({
      type: WINDOW_MAX,
      datas: { ...datas, preData }
    })
  }
}

export function minWindow(datas) {
  return (dispatch, getState) => {
    dispatch({
      type: WINDOW_MIN,
      datas: datas
    })
  }
}

export function displayWindow(datas) {
  return (dispatch, getState) => {
    dispatch({
      type: WINDOW_DISPLAY,
      datas: datas
    })
  }
}
