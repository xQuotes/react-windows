import React from 'react';
import classNames from 'classnames';

import ImgIcon from './images/Img';

import Header from './Layout/Header';
import Footer from './Layout/Footer';

import RightClickMenu from './RightClickMenu';
import DeskIcon from './DeskIcon';

import desktopStyle from './style/desktop.less';

var deskDivStyle = {
  backgroundImage: 'url(' + ImgIcon.BggroudImg + ')',
  backgroundPosition: 'center',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat'
}

export default class Desktop extends React.Component {
  render() {
    return (
      <div
        className={classNames("desktop")}
        style={deskDivStyle}>
	     <Header />
       <div className={classNames("main")}>
        <DeskIcon />
        <RightClickMenu />
       </div>
       <Footer />
      </div>
      )
  }
}
