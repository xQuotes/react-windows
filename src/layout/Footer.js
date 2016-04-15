import React from 'react';
import classNames from 'classnames';

import ImgIcon from '../images/Img';

import footerStyle from '../style/footer.less';

var footerLeftDivStyle = {
  backgroundImage: 'url(' + ImgIcon.WinstartIcon + ')',
  backgroundPosition: 'center',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'initial'
}

export default class Footer extends React.Component {
  render() {
    return (
      <div
        className={classNames("footer")}>
       <div
         className={classNames("footer-left")}
         style={footerLeftDivStyle}>
       </div>
       <div className={classNames("footer-center")}>
       </div>
       <div className={classNames("footer-right")}>
       </div>
      </div>
      )
  }
}
