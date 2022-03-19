import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { signin } from '../../redux/actions/Admin'

function SignInAdmin() {
    const dispatch=useDispatch()
  const [newAdmin, setNewAdmin] = useState({})
  const handleChange=(e)=>{
  setNewAdmin({...newAdmin,[e.target.name]:e.target.value})
  }
  return (
    <div style={{ 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "300px",
        paddingLeft: "500px",
  
        textAlign: "left",
        paddingBottom: "250px",
        paddingTop: "50px",
        fontSize: "20px",
    }}>
         <div className="Container">
      <form>
        <h2> Hello Amin </h2>
        <label>Email</label>
    <input type="email" placeholder="Enter Your Email" name="email" onChange={handleChange} />

    <label>Password</label>
    <input type="password" placeholder="Enter Your Password" name="password" onChange={handleChange} />
    <br />
   <div>
   <Link to={'/profile'}> <button  style={{ margin: "10px" }} type="submit" onClick={()=>dispatch(signin(newAdmin))}> S'identifier </button> </Link> 
    
   </div>
    
      </form>
    </div>
        
    </div>
  )
}

export default SignInAdmin