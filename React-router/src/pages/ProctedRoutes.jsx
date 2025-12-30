import React from 'react'
import { Navigate } from 'react-router-dom'

const ProctedRoutes = ({children}) => {
    const isAuthenticated = true
  return (
    <div>
      {isAuthenticated ? children : <Navigate to='/login'/>}
    </div>
  )
}

export default ProctedRoutes
