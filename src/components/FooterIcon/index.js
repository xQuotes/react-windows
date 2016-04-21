import React from 'react'
import classNames from 'classnames'

import footerIconStyle from '../../style/footerIcon.less'

export default class FooterIcon extends React.Component {
  constructor(props) {
    super(props)
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
          }}>
        </div>
      </div>
      )
  }
}