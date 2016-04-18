import React from 'react'
import classNames from 'classnames'

import update from 'react/lib/update'
import { DropTarget, DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import desktopStyle from '../../style/desktop.less'
import DeskIcon from '../DeskIcon/index'
import deskIconDatas from '../../datas/deskIcon'

import RightClickMenu, {
  MenuWidth,
  MenuHeight
} from '../RightClickMenu/index'

const deskIconTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);
    
    component.moveDeskIcon(item.id, left, top);
  }
};

const windowTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);
    
    component.moveWindow(item.id, left, top);
  }
};

import { deskIconConst } from '../DeskIcon/constants'
import { windowConst } from '../Window/constants'

@DragDropContext(HTML5Backend)
@DropTarget(deskIconConst, deskIconTarget, connect => ({
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
  //移动窗口
  moveWindow(id, left, top) {
    
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
    const { display } = this.props;
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
        </div>
        {menuShow ? <RightClickMenu styles={this.state.menuShowStyle}/> : '' }
      </div>
      )
  }
}
