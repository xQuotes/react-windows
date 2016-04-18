import React from 'react'
import classNames from 'classnames'

import ImgIcon from '../../images/Img'

import rightClickMenu from '../../style/rightClickMenu.less'

export const MenuWidth = 210;
export const MenuHeight = 158;

export default class RightClickMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(event) {
    // 防止冒泡
    event.stopPropagation();
  }
  render() {
    return (
      <div
        className={classNames("right-click-menu")}
        style={this.props.styles}
        onClick={this.handleClick.bind(this)}>
       <div className={classNames("menu")}>
        <div 
          className={classNames("menu-li")}
          onClick={()=>{
            history.go('-1');
          }}>
          <div className={classNames("menu-li-left")}></div>
          <div className={classNames("menu-li-right")}>返回</div>
        </div>
        <div 
          className={classNames("menu-li")}
          onClick={()=>{
            history.go('1');
          }}>
          <div className={classNames("menu-li-left")}></div>
          <div className={classNames("menu-li-right")}>前进</div>
        </div>
        <div
          className={classNames("menu-li")}
          onClick={()=>{
            location.reload();
          }}>
          <div className={classNames("menu-li-left")}></div>
          <div className={classNames("menu-li-right")}>重新加载</div>
        </div>
        <div className={classNames("menu-li")}>
          <div className={classNames("menu-li-left")}></div>
          <div className={classNames("menu-li-right")}>重新排列图标</div>
        </div>
        <div className={classNames("menu-line")}>
          <div className={classNames("menu-line-left")}></div>
          <div className={classNames("menu-line-right")}>
            <div className={classNames("hr")}></div>
          </div>
        </div>
        <div className={classNames("menu-li")}>
          <div className={classNames("menu-li-left")}></div>
          <div className={classNames("menu-li-right")}>命令行</div>
        </div>
        <div className={classNames("menu-line")}>
          <div className={classNames("menu-line-left")}></div>
          <div className={classNames("menu-line-right")}>
            <div className={classNames("hr")}></div>
          </div>
        </div>
        <div className={classNames("menu-li")}>
          <div className={classNames("menu-li-left")}></div>
          <div className={classNames("menu-li-right")}>个性化</div>
        </div>
       </div>
      </div>
      )
  }
}
