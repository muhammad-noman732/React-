// PublicRoute.jsx (Updated)
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
  const user = useSelector(state => state.auth.user)
  
  // If user exists, redirect from public routes to home
  return user ? <Navigate to="/" replace /> : <Outlet /> 
}

export default PublicRoute