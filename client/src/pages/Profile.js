import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
function Profile() {
  const load=useSelector(state=>state.adminReducer.load)
  const isAuth=useSelector(state=>state.adminReducer.isAuth)
  const admin=useSelector(state=>state.adminReducer.admin)
  return (
    <div >
    {load?<Spinner animation="border" variant="primary" />:isAuth? 
    <div style={{ textAlign: "center" }}>
      <h1 style={{
                    fontStyle: "italic",
                    marginTop: "20px",
                    color: "black",
                }}> Profile Of {admin.name}</h1>
      <h4> NAME: {admin.name}</h4>
      <h4> EMAIL: {admin.email}</h4>
      <h4> ADRESSE: {admin.adresse}</h4>
      
    </div>:
    <div>
      {alert("please check your email or your password")}
      <Navigate to={"/signin"}/>
    </div> }
    </div>
  )
}

export default Profile
