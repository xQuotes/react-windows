import React, { PropTypes } from 'react';
import update from 'react/lib/update';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ImgIcon from './images/Img';

import Header from './Header';
import Footer from './Footer';

import RightClickMenu, {MenuWidth, MenuHeight} from './RightClickMenu';
import DeskIcon from './DeskIcon';
import Window from './Window';
import Dos from './Dos';

import desktopStyle from './style/desktop.less';

import deskIconDatas from './datas/deskIcon';

import commonStyle from './style/common.less';

const boxTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);
    
    component.moveBox(item.id, left, top);
  }
};

@DragDropContext(HTML5Backend)
@DropTarget('DeskIcon', boxTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
export default class Desktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //窗口
      windowShowStyle: {
        opacity: 0
      },
      //图标
      boxes: deskIconDatas
    }
  }
  //移动图标
  moveBox(id, left, top) {
    this.setState(update(this.state, {
      boxes: {
        [id]: {
          $merge: {
            left: left,
            top: top
          }
        }
      }
    }));
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
    const { connectDropTarget } = this.props;
    const { boxes } = this.state;
    return connectDropTarget(
      <div
        className={classNames("desktop")}>
	     <Header />
       <div
        className={classNames("main")}
        ref="deskMain"
        onMouseUp={this.rightClick.bind(this)}
        onClick={this.handleClick.bind(this)}>

        {Object.keys(boxes).map(key => {
          const { left, top, icon, title } = boxes[key];
          return (
            <DeskIcon key={key}
                 id={key}
                 left={left}
                 top={top}
                 title={title}
                 icon={icon}
                 hideSourceOnDrag={true}>
            </DeskIcon>
          );
        })}

        <RightClickMenu styles={this.state.windowShowStyle}/>
       </div>
       <Footer />
      </div>
      )
  }
}
