import React from 'react';
import classNames from 'classnames';

import ImgIcon from './images/Img';

import StartMenu from './StartMenu';

import footerStyle from './style/footer.less';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startMenuDisplay: false
    }
  }
  handleClick(event) {
    // 防止冒泡
    this.setState({
      startMenuDisplay: this.state.startMenuDisplay ? false : true
    })
  }
  render() {
    const { startMenuDisplay } = this.state;
    return (
      <div>
        { startMenuDisplay ? <StartMenu /> : ''}
        <div
          className={classNames("footer")}>
          <div
            className={classNames("footer-left")}
            style={{
              backgroundImage: 'url(' + ImgIcon.WinstartIcon + ')',
              backgroundPosition: 'center',
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'initial'
            }}
            onClick={this.handleClick.bind(this)}>
          </div>
          <div className={classNames("footer-center")}>
          </div>
          <div
            className={classNames("footer-right")}>
          </div>
        </div>
      </div>
      )
  }
}
