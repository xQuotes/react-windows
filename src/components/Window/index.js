import React from 'react'
import classNames from 'classnames'
import {
  connect
} from 'react-redux'

import { DragSource, DragDropContext } from 'react-dnd'

import ImgIcon from '../../images/Img'

import { upWindow, hideWindow } from '../Window/actions'
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
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
}))


@connect((state) => ({
  win: state.win
}))
export default class Window extends React.Component {
  constructor(props) {
    super(props)
  }
  closeClick(id) {
    const { dispatch } = this.props;
    dispatch(hideWindow({
      id: id
    }))
  }
  handleClick(id) {
    const { dispatch } = this.props;
    dispatch(upWindow({
      id: id
    }))
  }
  render() {
    const { ...win } = this.props;
    const { isDragging, hideSourceOnDrag, connectDragSource, connectDragPreview } = this.props

    if (isDragging && hideSourceOnDrag ) {
      return null;
    }

    return (
        connectDragPreview(
        <div className={classNames("window")}
          style={{
            opacity: isDragging ? 0.5 : 1,
            left: win.left,
            top: win.top
          }}
          onClick={this.handleClick.bind(this, win.id)}>
          {connectDragSource(<div
            className={classNames("w-header")}>
            <div className={classNames("w-header-title")}>
              {win.title}
            </div>
            <div className={classNames("w-header-action")}>
              <div className={classNames("w-header-min")}>-</div>
              <div className={classNames("w-header-max")}>口</div>
              <div
                className={classNames("w-header-close")}
                onClick={this.closeClick.bind(this, win.id)}>x</div>
            </div>
          </div>
          )}
           <div className={classNames("w-container")}>
           </div>
        </div>
    ))
  }
}
