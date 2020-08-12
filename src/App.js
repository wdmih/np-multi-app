import 'materialize-css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { PageLoading } from './components/PageLoading'
import { AuthContext } from './context/auth.context'
import { useAuth } from './hooks/auth.hook'
import { useRoutes } from './routes'
import { DashboardTemplate } from './templates/Dashboard.template'

function App () {
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
        isLoading
      }}>
      {isLoading ? (
        <PageLoading />
      ) : (
        <Router>
          {isAuthenticated ? (
            <DashboardTemplate isAuthenticated={isAuthenticated} />
          ) : (
            <div className='row no-margin h-100 valign-wrapper'>{routes}</div>
          )}
        </Router>
      )}
    </AuthContext.Provider>
  )
}

export default App
