import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard page</h1>
        <nav>
        <Link to="/dashboard/courses">Courses</Link> | 
        <Link to="/mock-test">mockTest</Link>
      </nav>

      
    </div>
  )
}

export default Dashboard
