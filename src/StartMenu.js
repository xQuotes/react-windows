import React from 'react';
import classNames from 'classnames';


import ImgIcon from './images/Img';

import startMenu from './style/startMenu.less';

export default class StartMenu extends React.Component {
  render() {
    return (
      <div className={classNames('start-menu')}>
        <div className={classNames('start-menu-left')}>
          <div className={classNames('start-menu-li start-menu-about')}>
            <div className={classNames('about-icon icon-img')}
              style={Styles.aboutIconSpanStyle}></div>
            <div className={classNames('about-text icon-text')}>关于本系统</div>
          </div>
          <div className={classNames('start-menu-li start-menu-setting')}>
            <div className={classNames('setting-icon icon-img')}
              style={Styles.settingIconSpanStyle}></div>
            <div className={classNames('setting-text icon-text')}>系统设置</div>
          </div>
          <div className={classNames('start-menu-li start-menu-dos')}>
            <div className={classNames('dos-icon icon-img')}
              style={Styles.dosIconSpanStyle}></div>
            <div className={classNames('dos-text icon-text')}>启动命令行</div>
          </div>
          <div className={classNames('start-hr-div')}>
            <div className={classNames('start-hr')}></div>
          </div>
          <div className={classNames('start-menu-li start-menu-close')}>
            <div className={classNames('close-text')}>关闭网页</div>
          </div>
        </div>
        <div className={classNames('start-menu-right')}>
          <div className={classNames('user-avatar avatar-img')}
           style={Styles.userAvatarStyle}></div>
          <div className={classNames('start-menu-user user-name')}>用户名</div>
          <div className={classNames('start-menu-user user-setting')}>设置</div>
          <div className={classNames('start-hr-div')}>
            <div className={classNames('start-hr')}></div>
          </div>
          <div className={classNames('start-menu-user user-logout')}>注销登录</div>
        </div>
      </div>
      )
  }
}


var Styles = {
  aboutIconSpanStyle: {
    backgroundImage: 'url(' + ImgIcon.AboutIcon + ')'
  },
  settingIconSpanStyle: {
    backgroundImage: 'url(' + ImgIcon.SettingIcon + ')'
  },
  dosIconSpanStyle: {
    backgroundImage: 'url(' + ImgIcon.DosIcon + ')'
  },

  userAvatarStyle: {
    backgroundImage: 'url(' + ImgIcon.AvatarIcon + ')'
  }
}