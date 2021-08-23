import 'antd/dist/antd.css'
import './assets/css/global.scss'
import './assets/css/main.scss'
import './assets/css/app.scss'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import history from './utils/history'
import { configure } from './store'
import AppRoutes from './components/Application/AppRoutes'
import route from './routes'

render(
  <Provider store={configure()}>
    <ConnectedRouter history={history}>
      <AppRoutes routes={route} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)
