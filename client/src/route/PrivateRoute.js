import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
    const load=useSelector(state=>state.adminReducer.load)
    const isAuth=useSelector(state=>state.adminReducer.isAuth)
  return (load?<p>loadiiiiing </p> : isAuth? children: <Navigate to='/' />
   )
}

export default PrivateRoute