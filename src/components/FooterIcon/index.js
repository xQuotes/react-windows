import React from 'react'
import classNames from 'classnames'
import {
  connect
} from 'react-redux'

import footerIconStyle from '../../style/footerIcon.less'

import {
  displayWindow
} from '../Window/actions'

@connect()
export default class FooterIcon extends React.Component {
  constructor(props) {
    super(props)
  }
  displayClick(id) {
    const {dispatch} = this.props;
    dispatch(displayWindow({
      id: id,
      display: 'flex'
    }))
  }
  render() {
    const { ...win } = this.props;
    return (
      <div
        className={classNames('footer-icon')}>
        <div
          className={classNames('footer-icon-img icon-img')}
          style={{
            backgroundImage: 'url(' + win.icon + ')'
          }}
          onClick={this.displayClick.bind(this, win.id)}>
        </div>
      </div>
      )
  }
}