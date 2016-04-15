import React from 'react';
import classNames from 'classnames';

import ImgIcon from './images/Img';

import deskIconStyle from './style/DeskIcon.less';

var deskIconImgDivStyle = {
  backgroundImage: 'url(' + ImgIcon.DesktopIcon + ')',
  backgroundPosition: 'center',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'initial'
}

export default class DeskIcon extends React.Component {
  render() {
    return (
        <div
          className={classNames("desk-icon")}>
          <div
            className={classNames("desk-icon-bg")}>
          </div>
          <div
            className={classNames("desk-icon-img")}
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
