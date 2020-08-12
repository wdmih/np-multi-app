import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { Incoming } from './pages/Incoming'
import { Outgoing } from './pages/Outgoing'
import { Settings } from './pages/Settings'

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/outgoing" exact>
          <Outgoing />
        </Route>
        <Route path="/incoming">
          <Incoming />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Redirect to="/outgoing" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
