import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { signin } from '../redux/actions/User'
function SigninUser() {
   const dispatch=useDispatch()
  const [newUser, setNewUser] = useState({})
  const handleChange=(e)=>{
    setNewUser({...newUser,[e.target.name]:e.target.value})
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
        <h2> Hello User </h2>
        <label>Email</label>
    <input type="email" placeholder="Enter Your Email" name="email" onChange={handleChange} />

    <label>Password</label>
    <input type="password" placeholder="Enter Your Password" name="password" onChange={handleChange} />
    <br />
   <div>
   <Link to={'/profile'}> <button  style={{ margin: "10px" }} type="submit" onClick={()=>dispatch(signin(newUser))}> S'identifier </button> </Link> 
    {/* <Link to={'/signup'}> <button  style={{ margin: "10px" }} type="submit"> Sign Up </button> </Link>  */}
   </div>
    
      </form>
    </div>
  </div>
  )
}

export default SigninUser 