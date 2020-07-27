import React, { Fragment } from "react"
import { Navbar } from "../components/Navbar/Navbar"
import { useRoutes } from "../routes"
import { SideNav } from "../components/SideNav"
import { UserDataContext } from "../context/user-data.context"
import { useUserDataDB } from "../hooks/user-data.hook"

export const DashboardTemplate = (isAuthenticated) => {
  const {
    userData,
    userDataSet,
    userDataDelete,
    error,
    inProgress,
  } = useUserDataDB()
  const routes = useRoutes(isAuthenticated)
  return (
    <UserDataContext.Provider
      value={{
        userData,
        userDataSet,
        userDataDelete,
        error,
        inProgress,
      }}>
      <Fragment>
        <header>
          <SideNav />
        </header>
        <main>
          <Navbar />
          {routes}
        </main>
      </Fragment>
    </UserDataContext.Provider>
  )
}
