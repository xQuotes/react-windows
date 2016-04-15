import React from 'react';
import classNames from 'classnames';

import ImgIcon from './images/Img';

import Header from './Layout/Header';
import Footer from './Layout/Footer';

import RightClickMenu from './RightClickMenu';
import DeskIcon from './DeskIcon';
import StartMenu from './StartMenu';
import Window from './Window';
import Dos from './Dos';

import desktopStyle from './style/desktop.less';

export default class Desktop extends React.Component {
  render() {
    return (
      <div
        className={classNames("desktop icon-img")}
        style={Styles.deskDivStyle}>
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

var Styles = {
  deskDivStyle: {
    backgroundImage: 'url(' + ImgIcon.BggroudImg + ')'
  }
}
