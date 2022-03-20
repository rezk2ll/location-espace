import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/actions/Admin';
import {Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
function AddUser() {
  
  const dispatch=useDispatch()
  const [newUser, setNewUser] = useState({ name: "",
  email: "",
  password: "",
  adresse: "",
  tel: "",
})
const handleChange = (e) => {
  setNewUser({ ...newUser, [e.target.name]:e.target.value }); 
};
const handleAdd = () => {
  dispatch(addUser(newUser));
  
};
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flexWrap: "wrap",
      width: "300px",
      paddingLeft: "500px",
      textAlign: "center",
  }}>
    <div className="Container" id="container">
      <form>
         <h2>New User</h2>
         <label htmlFor="UserName">Nom:</label>
                        <input
                            type="text"
                            name="name"
                            
                            placeholder="enter the user Name"
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            
                            placeholder="enter the user Email"
                            onChange={handleChange}
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            
                            placeholder="enter the user Password"
                            onChange={handleChange}
                        />
                        <label htmlFor="adresse">Adresse:</label>
                        <input
                            type="text"
                            name="adresse"
                           
                            placeholder="enter the user Adress"
                            onChange={handleChange}
                        />
                        <label htmlFor="tel">Phone:</label>
                        <input
                            type="tel"
                            name="tel"
                            
                            placeholder="enter the user Phone"
                            onChange={handleChange}
                        /> 
                        <Link to='/'> 
                        <Button
                                style={{ textAlign: "center", margin: "20px" }}
                                onClick={handleAdd}
                            >
                                Envoyer
                            </Button>
                        </Link>
                        
      </form>

    </div>

    </div> 
  )
}

export default AddUser