import React from 'react'
import classNames from 'classnames'
import {
  connect
} from 'react-redux'

import update from 'react/lib/update'
import { DropTarget, DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import desktopStyle from '../../style/desktop.less'
import DeskIcon from '../DeskIcon/index'
import Window from '../Window/index'
import deskIconDatas from '../../datas/deskIcon'

import RightClickMenu, {
  MenuWidth,
  MenuHeight
} from '../RightClickMenu/index'

import { moveWindow } from '../Window/actions'

import { windowConst } from '../Window/constants'

const windowTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);
    props.dispatch(moveWindow({
      id: item.id,
      left: left,
      top: top
    }));
    return {};
  }
};

@connect((state) => ({
  win: state.win
}))
@DragDropContext(HTML5Backend)
@DropTarget(windowConst, windowTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
export default class Desktop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deskIcons: deskIconDatas,
      menuShow: false
    }
  }
  //移动图标
  moveDeskIcon(id, left, top) {
    this.setState(update(this.state, {
      deskIcons: {
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
        menuShow: true,
        menuShowStyle: {
          left: wX + 'px',
          top: wY + 'px'
        }
      });
    }
  }
  //右键
  handleClick(event) {
    // 隐藏右键菜单
    this.setState({
        menuShow: false
    });
  }
  render() {
    const { connectDropTarget } = this.props;
    const { win } = this.props;
    console.log(win);
    const { menuShow, deskIcons } = this.state;
    return connectDropTarget(
      <div
        className={classNames('desktop')}
        onMouseUp={this.rightClick.bind(this)}
        onClick={this.handleClick.bind(this)}>
        <div className="menu">
          {Object.keys(deskIcons).map(key => {
            const { left, top, icon, title } = deskIcons[key];
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
          {Object.keys(win.datas).map(key => {
            const { id, left, top, title } = win.datas[key];
            return (<Window key={key}
                   id={key}
                   left={left}
                   top={top}
                   title={title}
                   hideSourceOnDrag={true}/>);
          })}
        </div>
        {menuShow ? <RightClickMenu styles={this.state.menuShowStyle}/> : '' }
      </div>
      )
  }
}
