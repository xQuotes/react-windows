import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import ImgIcon from './images/Img';

import deskIconStyle from './style/DeskIcon.less';

var deskIconImgDivStyle = {
  backgroundImage: 'url(' + ImgIcon.DesktopIcon + ')'
}

export default class DeskIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrog: false
    }
  }
  handleClick(event) {
    event.stopPropagation();
  }
  handleDrag(event) {

    var that = ReactDOM.findDOMNode(this);
    var x = (event.pageX || event.clientX) - that.offsetLeft;
    var y = (event.pageY || event.clientY) - that.offsetTop;
    
    console.log(x + ',' + y);

    this.setState({
      isDrog: true,
      currentX: x,
      currentY: y
    });
  }
  handleDragMove(event) {
    if(!this.state.isDrog) return;
    var cursorX = (event.pageX || event.clientX) - this.state.currentX;
    var cursorY = (event.pageY || event.clientY) - this.state.currentY;
    
    console.log(cursorX + "," + cursorY);
    this.setState({
      deskIconDragStyle: {
        top: cursorX + 'px',
        left: cursorY + 'px'
      }
    });
  }
  handleDragEnd(event) {
    this.setState({
      isDrog: false
    });
  }
  render() {
    return (
        <div
          className={classNames("desk-icon")}
          onClick={this.handleClick.bind(this)}
          onMouseDown={this.handleDrag.bind(this)}
          onDragOver={this.handleDragMove.bind(this)}
          onMouseUp={this.handleDragEnd.bind(this)}
          style={this.state.deskIconDragStyle}>
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
