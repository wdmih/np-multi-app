import React, { Fragment } from "react"
import { Navbar } from "../components/Navbar"
import { useRoutes } from "../routes"
import { SideNav } from "../components/SideNav"

export const DashboardTemplate = (isAuthenticated) => {
  const routes = useRoutes(isAuthenticated)
  return (
    <Fragment>
      <header>
        <SideNav />
      </header>
      <main>
        <Navbar />
        {routes}
      </main>
    </Fragment>
  )
}
