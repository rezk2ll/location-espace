import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/User'
import { Button } from "react-bootstrap";
import api from '../../lib/api';
import { useNavigate } from "react-router-dom";



function SigninUser() {
  const dispatch = useDispatch()
  const [newUser, setNewUser] = useState({})
  let navigate = useNavigate();

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e) => {    
    return api.post("/api/user/signin", newUser).then(res => {
      dispatch(login(res.data))
      navigate("/profile", { replace: true })
    })
    .catch(err => {
      console.error('failed to login');
    })
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
            <Button
              style={{ margin: "10px" }}
              onClick={() => handleLogin()}
            >
              S'identifier
            </Button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default SigninUser 