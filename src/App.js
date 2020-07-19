import React, { Fragment } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { PageLoading } from "./components/PageLoading"
import { AuthContext } from "./context/auth.context"
import { useRoutes } from "./routes"
import { useAuth } from "./hooks/auth.hook"

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
              <div className="container-fluid">
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-10">{routes}</div>
                </div>
              </div>
            </Fragment>
          ) : (
            <div className="container-fluid h-100 d-flex justify-content-center">
              {routes}
            </div>
          )}
        </Router>
      )}
    </AuthContext.Provider>
  )
}

export default App
