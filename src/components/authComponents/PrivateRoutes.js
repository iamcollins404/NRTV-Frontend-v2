import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'

const PrivateRoutes = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = React.useState(true)
  
  return (
    userIsLoggedIn ? <Outlet/> : <Navigate to='/auth/login'/>
  )
}

export default PrivateRoutes