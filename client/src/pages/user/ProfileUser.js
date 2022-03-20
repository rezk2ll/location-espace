import React from 'react'
import {Spinner} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function ProfileUser() {
  const load=useSelector(state=>state.userReducer.load)
  const isAuth=useSelector(state=>state.userReducer.isAuth)
  const user=useSelector(state=>state.userReducer.user)
  return (
    <div >
    {load?<Spinner animation="border" variant="primary" />:isAuth?  
    <div style={{ textAlign: "center" }}>
      <h1 style={{
                    fontStyle: "italic",
                    marginTop: "20px",
                    color: "black",
                }}> Profile Of {user.name}</h1>
      <h4> NAME: {user.name}</h4>
      <h4> EMAIL: {user.email}</h4>
      <h4> ADRESSE: {user.adresse}</h4>
      
    </div>:
    <div>
      {alert("please check your email or your password")}
      <Navigate to={"/signin"}/>
    </div> }
    </div>
  )
}

export default ProfileUser