import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { signup } from "../redux/actions/User";
const Signup = () => {
    const [newUser, setNewUser] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flexWrap: "wrap",
                width: "300px",
                fontSize: "20px",
                fontWeight: "900px",
                paddingLeft: "500px",
            }}
        >
            <div className="Container" id="container">
                <h2 style={{ textAlign: "center" }}>Créer votre compte</h2>
                <form>
                    <label>Nom:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name .."
                        onChange={handleChange}
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email .."
                        onChange={handleChange}
                    />
                    <label>Mot de passe:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password .."
                        onChange={handleChange}
                    />
                    <label>Adresse:</label>
                    <input
                        type="adresse"
                        name="adresse"
                        placeholder="Enter your adress .."
                        onChange={handleChange}
                    />
                    <label>Tél:</label>
                    <input
                        type="number"
                        name="tel"
                        placeholder="Enter your phone .."
                        onChange={handleChange}
                    />
                    <br />
                    <Link to="/profile">
                        <Button
                            style={{ margin: "10px" }}
                            onClick={() => dispatch(signup(newUser))}
                        >
                            S'inscrire
                        </Button>
                    </Link>
                </form>
            </div>

            <div style={{ textAlign: "center" }}>
                <p>If you have already account click here!!</p>
                <Link to="/profile">
                    <Button>S'identifier</Button>
                </Link>
            </div>
        </div>
    );
};
export default Signup;