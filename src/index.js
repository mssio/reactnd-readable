import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Router from 'app/router'
import store from 'app/store'

import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)
