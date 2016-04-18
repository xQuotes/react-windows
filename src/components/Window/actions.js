export const WINDOW_SHOW = 'WINDOW_SHOW'
export const WINDOW_HIDE = 'WINDOW_HIDE'
export const WINDOW_MOVE = 'WINDOW_MOVE'

export function showWindow() {
  return (dispatch, getState) => {
    dispatch({
      type: WINDOW_SHOW
    })
  }
}

export function hideWindow() {
  return (dispatch, getState) => {
    dispatch({
      type: WINDOW_HIDE
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
