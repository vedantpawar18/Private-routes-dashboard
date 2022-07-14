import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <h1>Welcome to Dashboard</h1>
        <div>
            <Link to="/dashboard/settings">Go to settings</Link>
        </div>
    </div>
  )
}

export default Dashboard