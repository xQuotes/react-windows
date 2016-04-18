import React from 'react'
import classNames from 'classnames'
import {
  connect
} from 'react-redux'

import { DragSource, DragDropContext } from 'react-dnd'

import ImgIcon from '../../images/Img'

import { hideWindow } from '../Window/actions'
import windowStyle from '../../style/window.less'

import { windowConst } from './constants'

const windowSource = {
  beginDrag(props) {
    const { id, left, top } = props
    return { id, left, top }
  }
}
@DragSource(windowConst, windowSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))


@connect((state) => ({
  win: state.win
}))
export default class Window extends React.Component {
  constructor(props) {
    super(props)
  }
  closeClick(event) {
    const { dispatch } = this.props
    dispatch(hideWindow())
  }
  render() {
    const { ...drops } = this.props
    const { win } = this.props
    if (drops.isDragging && drops.hideSourceOnDrag ) {
      return null;
    }
    return {drops.connectDragSource(
      <div
        className={classNames("window")}>
        <div
          className={classNames("w-header")}
          style={{
            opacity: drops.isDragging ? 0.5 : 1,
            left: drops.left,
            top: drops.top
          }}>
          <div className={classNames("w-header-title")}>
            Ifeng DesktopUI
          </div>
          <div className={classNames("w-header-action")}>
            <div className={classNames("w-header-min")}>-</div>
            <div className={classNames("w-header-max")}>口</div>
            <div
              className={classNames("w-header-close")}
              onClick={this.closeClick.bind(this)}>x</div>
          </div>
        </div>
       <div className={classNames("w-container")}>
       </div>
      </div>
      )}
  }
}
