import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import appStyle from '../style/app.less'

export default class App extends React.Component {
  render() {
    return (
      <div className={classNames('app')}>
       {this.props.children}
      </div>
      )
  }
}