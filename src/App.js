import React, { Fragment } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "materialize-css"
import { Navbar } from "./components/Navbar"
import { PageLoading } from "./components/PageLoading"
import { AuthContext } from "./context/auth.context"
import { useRoutes } from "./routes"
import { useAuth } from "./hooks/auth.hook"
import { Sidebar } from "./components/Sidebar"

function App() {
  const { user, register, login, logout, isLoading } = useAuth()
  const isAuthenticated = !!user
  const routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        isAuthenticated,
        isLoading,
      }}>
      {isLoading ? (
        <PageLoading />
      ) : (
        <Router>
          {isAuthenticated ? (
            <Fragment>
              <Navbar />
              <div className="row">
                <div className="col l2">
                  <Sidebar />
                </div>
                <div className="col l10">{routes}</div>
              </div>
            </Fragment>
          ) : (
            <div className="row no-margin h-100 valign-wrapper">{routes}</div>
          )}
        </Router>
      )}
    </AuthContext.Provider>
  )
}

export default App
