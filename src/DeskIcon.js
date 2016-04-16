import React, { PropTypes } from 'react';
import { DragSource, DragDropContext } from 'react-dnd';
import classNames from 'classnames';

import Window from './Window'

import deskIconStyle from './style/DeskIcon.less';

const deskIconSource = {
  beginDrag(props) {
    const { id, left, top } = props;
    return { id, left, top };
  }
};

@DragSource('DeskIcon', deskIconSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class DeskIcon extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      windowDisplay: false
    }
  }
  iconDoubleClick(event) {
    this.setState({
      windowDisplay: true
    })
  }
  render() { 
    const { ...drops } = this.props;
    const {windowDisplay} = this.state;
    if (drops.isDragging && drops.hideSourceOnDrag) {
      return null;
    }
    return (
      <div>
        { windowDisplay ? <Window windowDisplay={windowDisplay}/> : '' }
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
