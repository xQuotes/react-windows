import React, { PropTypes } from 'react'
import classNames from 'classnames'
import {
  connect
} from 'react-redux'

import { DragSource, DragDropContext } from 'react-dnd'

import { showWindow } from '../Window/actions'
import Window from '../Window/index'

import deskIconStyle from '../../style/DeskIcon.less'
import { deskIconConst } from './constants'
const deskIconSource = {
  beginDrag(props) {
    const { id, left, top } = props
    return { id, left, top }
  }
};
@DragSource(deskIconConst, deskIconSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))

@connect((state) => ({
  win: state.win
}))
export default class DeskIcon extends React.Component {  
  constructor(props) {
    super(props);
  }
  iconDoubleClick(event) {
    const { dispatch } = this.props;
    dispatch(showWindow())
  }
  render() { 
    const { ...drops } = this.props;
    const { win } = this.props;
    if (drops.isDragging && drops.hideSourceOnDrag) {
      return null;
    }
    return (
      <div>
        { win.display ? <Window /> : '' }
        {drops.connectDragSource(<div
          className={classNames("desk-icon")}
          style={{
            opacity: drops.isDragging ? 0.5 : 1,
            left: drops.left,
            top: drops.top
          }}
          onDoubleClick={this.iconDoubleClick.bind(this)}>
          <div
            className={classNames("desk-icon-bg")}>
          </div>
          <div
            className={classNames("desk-icon-img icon-img")}
            style={{
              backgroundImage: 'url(' + drops.icon + ')'
            }}>
          </div>
          <div
            className={classNames("desk-icon-text")}>
            {drops.title}
          </div>
        </div>)}
      </div>
      )
  }
}
