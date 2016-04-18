import React from 'react';
import classNames from 'classnames';

import desktopStyle from '../../style/desktop.less';

import RightClickMenu, {
  MenuWidth,
  MenuHeight
} from '../RightClickMenu/index'

export default class Desktop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //窗口
      windowShowStyle: {
        opacity: 0
      }
    }
  }
  //右键
  rightClick(event) {
    if (!event) event = window.event;
    if (event.button == 2) {
      var x = event.pageX || event.clientX;
      var y = event.pageY || event.clientY;

      var dW = document.body.clientWidth;
      var dH = document.body.clientHeight;
      var wX = dW - x > MenuWidth ? x : x - MenuWidth;
      var wY = dH - y > MenuHeight ? y : y - MenuHeight;
      console.log(wX);
      console.log(wY);
      this.setState({
        windowShowStyle: {
          left: wX + 'px',
          top: wY + 'px',
          display: 'block'
        }
      });
    }
  }
  //右键
  handleClick(event) {
    // 隐藏右键菜单
    this.setState({
      windowShowStyle: {
        display: 'none'
      }
    });
  }
  render() {
    return (
      <div
        className={classNames('desktop')}
        onMouseUp={this.rightClick.bind(this)}
        onClick={this.handleClick.bind(this)}>
        <div className="menu">
          aa
        </div>
        <RightClickMenu styles={this.state.windowShowStyle}/>
      </div>
      )
  }
}
