import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import { Outgoing } from "./pages/Outgoing"
import { Incoming } from "./pages/Incoming"
import { AuthPage } from "./pages/AuthPage"

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
