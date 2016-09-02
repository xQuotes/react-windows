import React from 'react'
import classNames from 'classnames'
import {
  connect,
  Provider
} from 'react-redux'
import pureRender from 'pure-render-decorator'

import {
  IndexRoute,
  Router,
  Route,
  browserHistory
} from 'react-router'
import {
  syncHistoryWithStore
} from 'react-router-redux'

import ImgIcon from '../images/Img'

import commonStyle from '../style/common.less'
import rootStyle from '../style/root.less'

import App from './App'
import Desktop from '../components/Desktop/index'
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

import Basejs from '../Base';
import DevTools from './DevTools'

@connect(() => ({}))
export default class Root extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { store } = this.props
    const history = syncHistoryWithStore(
      browserHistory, store
      )
    return(
      <Provider store={store}>
        <div
          className={classNames("root")}>
          <Header />
          <div
            className={classNames("main")}
            ref="deskMain">
            <Router history={history}>
              <Route path='/' component={App}>
                <IndexRoute component={Desktop} />
                <Route path='desktop' component={Desktop}>
                </Route>
              </Route>
            </Router>
          </div>
          <Footer />
          <DevTools />
        </div>
      </Provider>
      )
  }
}