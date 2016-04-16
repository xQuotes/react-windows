import React, { PropTypes } from 'react';
import { DragSource, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import classNames from 'classnames';

import ImgIcon from './images/Img';

import deskIconStyle from './style/DeskIcon.less';

var deskIconImgDivStyle = {
  cursor: 'move',
  backgroundImage: 'url(' + ImgIcon.DesktopIcon + ')'
}

const deskIconSource = {
  beginDrag(props) {
    const { id, left, top } = props;
    return { id, left, top };
  }
};

@DragDropContext(HTML5Backend)
@DragSource('DeskIcon', deskIconSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class DeskIcon extends React.Component {  
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };
  render() { 
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
        <div
          className={classNames("desk-icon")}
          style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: 'move'
          }}>
          <div
            className={classNames("desk-icon-bg")}>
          </div>
          <div
            className={classNames("desk-icon-img icon-img")}
            style={deskIconImgDivStyle}>
          </div>
          <div
            className={classNames("desk-icon-text")}>
            桌面
          </div>
        </div>
      )
  }
}
