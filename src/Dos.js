import React from 'react';
import classNames from 'classnames';

import ImgIcon from './images/Img';

import windowStyle from './style/window.less';
import dosStyle from './style/dos.less';

export default class Dos extends React.Component {
  render() {
    return (
      <div
        className={classNames("window")}>
        <div className={classNames("w-header")}>
          <div className={classNames("w-header-title")}>
            XQDesktopUI
          </div>
          <div className={classNames("w-header-action")}>
            <div className={classNames("w-header-min")}>-</div>
            <div className={classNames("w-header-max")}>口</div>
            <div className={classNames("w-header-close")}>x</div>
          </div>
        </div>
       <div className={classNames("dos-container")}>
        <div>
          localhost:~ root$
        </div>
       </div>
      </div>
      )
  }
}
