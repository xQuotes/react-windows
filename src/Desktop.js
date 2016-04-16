import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import ImgIcon from './images/Img';

import Header from './Layout/Header';
import Footer from './Layout/Footer';

import RightClickMenu, {MenuWidth, MenuHeight} from './RightClickMenu';
import DeskIcon from './DeskIcon';
import StartMenu from './StartMenu';
import Window from './Window';
import Dos from './Dos';

import desktopStyle from './style/desktop.less';

export default class Desktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowShowStyle: {
        opacity: 0
      }
    }
  }
  rightClick(event) {
    if (!event) event = window.event;
    if (event.button == 2) {
      var x = event.pageX || event.clientX;
      var y = event.pageY || event.clientY;

      var dW = document.body.clientWidth;
      var dH = document.body.clientHeight;
      var wX = dW - x > MenuWidth ? x : x - MenuWidth;
      var wY = dH - y > MenuHeight ? y : y - MenuHeight;
      this.setState({
        windowShowStyle: {
          left: wX + 'px',
          top: wY + 'px',
          display: 'block'
        }
      });
    }
  }
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
        className={classNames("desktop bg-img")}
        style={Styles.deskDivStyle}
        onMouseUp={this.rightClick.bind(this)}
        onClick={this.handleClick.bind(this)}>
	     <Header />
       <div
        className={classNames("main")}
        ref="deskMain">
        <DeskIcon />
        <RightClickMenu styles={this.state.windowShowStyle}/>
       </div>
       <Footer />
      </div>
      )
  }
}

var Styles = {
  deskDivStyle: {
    backgroundImage: 'url(' + ImgIcon.BggroudImg + ')'
  }
}
