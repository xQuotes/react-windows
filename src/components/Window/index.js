import React from 'react';
import classNames from 'classnames';

import ImgIcon from '../../images/Img';

import windowStyle from '../../style/window.less';

export default class Window extends React.Component {
  constructor(props) {
    super(props);
    const {windowDisplay} = this.props;
    this.state = {
      windowDisplay: windowDisplay
    }
  }

  componentWillReceiveProps() {
    this.setState({
      windowDisplay: this.props.windowDisplay
    })
  }
  closeClick(event) {
    this.setState({
      windowDisplay: false
    })
  }
  render() {
    console.log(1)
    const { windowDisplay } = this.state;
    return (
      <div
        className={classNames("window")}
        style={{
          display: windowDisplay ? 'block' : 'none'
        }}>
        <div className={classNames("w-header")}>
          <div className={classNames("w-header-title")}>
            Ifeng DesktopUI
          </div>
          <div className={classNames("w-header-action")}>
            <div className={classNames("w-header-min")}>-</div>
            <div className={classNames("w-header-max")}>口</div>
            <div
              className={classNames("w-header-close")}
              onClick={this.closeClick.bind(this)}>x</div>
          </div>
        </div>
       <div className={classNames("w-container")}>
       </div>
      </div>
      )
  }
}
