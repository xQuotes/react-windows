import React from 'react';
import update from 'react/lib/update';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ImgIcon from './images/Img';

import Header from './Layout/Header';
import Footer from './Layout/Footer';

import RightClickMenu, {MenuWidth, MenuHeight} from './RightClickMenu';
import DeskIcon from './DeskIcon';
import StartMenu from './StartMenu';
import Window from './Window';
import Dos from './Dos';

import desktopStyle from './style/desktop.less';


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
      windowShowStyle: {
        opacity: 0
      },
      boxes: {
        'a': { top: 20, left: 80, title: '桌面' },
        'b': { top: 180, left: 20, title: '垃圾桶' }
      }
    }
  }

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
    const { connectDropTarget } = this.props;
    const { boxes} = this.state;
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

        {Object.keys(boxes).map(key => {
          const { left, top, title } = boxes[key];
          return (
            <DeskIcon key={key}
                 id={key}
                 left={left}
                 top={top}
                 title={title}
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

var Styles = {
  deskDivStyle: {
    backgroundImage: 'url(' + ImgIcon.BggroudImg + ')'
  }
}
