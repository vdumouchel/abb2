import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { SignupConnector } from './modules/Signup/SignupConnector'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path='/' component={SignupConnector} />
      <Route exact={true} path='/signup' component={SignupConnector} />
    </Switch>
  </BrowserRouter>
)

export default Router