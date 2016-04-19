export const DESKTOP_SHOW = 'DESKTOP_SHOW'
export const WINDOW_HIDE = 'WINDOW_HIDE'
export const WINDOW_MOVE = 'WINDOW_MOVE'

export function showDesktop() {
  return (dispatch, getState) => {
    dispatch({
      type: DESKTOP_SHOW
    })
  }
}
