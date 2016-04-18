import React from 'react'
import classNames from 'classnames'
import {
  connect
} from 'react-redux'

import ImgIcon from '../../images/Img'

import { hideWindow } from '../Window/actions'
import windowStyle from '../../style/window.less'

@connect((state) => ({
  win: state.win
}))
export default class Window extends React.Component {
  constructor(props) {
    super(props)
  }
  closeClick(event) {
    const { dispatch } = this.props
    dispatch(hideWindow())
  }
  render() {
    return (
      <div
        className={classNames("window")}>
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
