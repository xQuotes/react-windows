import React from 'react'
import classNames from 'classnames'
import {
  connect
} from 'react-redux'

import ImgIcon from '../../images/Img'

import StartMenu from '../StartMenu/index'

import footerStyle from '../../style/footer.less'

import FooterIcon from '../FooterIcon/index'

@connect((state) => ({
  win: state.win
}))
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
    const { win } = this.props;
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
            {!win.datas ? '' : Object.keys(win.datas).map(key => {
              if(!win.datas[key]){
                return '';
              } else {
                const { id, icon, title } = win.datas[key];
                return (<FooterIcon
                        key={id}
                        id={key}
                        title={title}
                        icon={icon}/>);
              }
            })}
          </div>
          <div
            className={classNames("footer-right")}>
          </div>
        </div>
      </div>
      )
  }
}
