import React from 'react'
import update from 'react/lib/update'
import classNames from 'classnames'
import { DropTarget, DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import desktopStyle from '../../style/desktop.less'

import DeskIcon from '../DeskIcon/index'
import deskIconDatas from '../../datas/deskIcon'

import RightClickMenu, {
  MenuWidth,
  MenuHeight
} from '../RightClickMenu/index'

const boxTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);
    
    component.moveBox(item.id, left, top);
  }
};

import { deskIcon } from '../DeskIcon/constants'

@DragDropContext(HTML5Backend)
@DropTarget(deskIcon, boxTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
export default class Desktop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //窗口
      windowShow: false,
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
        windowShow: true,
        windowShowStyle: {
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
      windowShow: false
    });
  }
  render() {
    const { connectDropTarget } = this.props;
    const { boxes } = this.state;
    return connectDropTarget(
      <div
        className={classNames('desktop')}
        onMouseUp={this.rightClick.bind(this)}
        onClick={this.handleClick.bind(this)}>
        <div className="menu">
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
        </div>
        {this.state.windowShow ? <RightClickMenu styles={this.state.windowShowStyle}/> : '' }
      </div>
      )
  }
}
