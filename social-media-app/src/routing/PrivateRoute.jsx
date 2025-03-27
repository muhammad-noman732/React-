// PrivateRoute.jsx (Updated)
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const user = useSelector(state => state.auth.user)
  
  // If no user, redirect from private routes to login
  return user ? <Outlet /> : <Navigate to="/login" replace />
}

export default PrivateRoute