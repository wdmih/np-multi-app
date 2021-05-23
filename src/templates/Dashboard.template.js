import React, { Fragment } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { SideNav } from '../components/SideNav'
import { UserDataContext } from '../context/user-data.context'
import { useUserDataDB } from '../hooks/user-data.hook'
import { useRoutes } from '../routes'

export const DashboardTemplate = (isAuthenticated) => {
  const {
    userData,
    userDataSet,
    userDataDelete,
    error,
    inProgress,
    currentApiKey,
    setCurrentApiKey
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
        currentApiKey,
        setCurrentApiKey
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
