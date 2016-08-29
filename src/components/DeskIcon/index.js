import React, { PropTypes } from 'react'
import classNames from 'classnames'
import {
  connect
} from 'react-redux'

import { DragSource, DragDropContext } from 'react-dnd'

import {
  showWindow,
  displayWindow
} from '../Window/actions'
import Window from '../Window/index'

import deskIconStyle from '../../style/deskIcon.less'
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

@connect((state) => ({}))
export default class DeskIcon extends React.Component {  
  constructor(props) {
    super(props);
  }
  iconDoubleClick(id) {
    const { dispatch } = this.props;
    dispatch(showWindow({
      id: id
    }))
  }
  iconHandleClick(id) {
    const { dispatch } = this.props;
    dispatch(displayWindow({
      id: id,
      display: 'flex'
    }))
  }
  render() { 
    const { ...drops } = this.props;
    
    if (drops.isDragging && drops.hideSourceOnDrag) {
      return null;
    }
    return (
      <div>
        {drops.connectDragSource(<div
          className={classNames("desk-icon")}
          style={{
            opacity: drops.isDragging ? 0.5 : 1,
            left: drops.left,
            top: drops.top
          }}
          onClick={this.iconHandleClick.bind(this, drops.id)}
          onDoubleClick={this.iconDoubleClick.bind(this, drops.id)}>
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
