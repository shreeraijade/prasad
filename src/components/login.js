import React, { useContext, useState } from 'react';
import './login.css';
import { AuthContext } from '../context/contextApi.js';
import { Link } from 'react-router-dom';

function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");


  const handleLogin = (e) => {
    e.preventDefault();
    // Implement the login functionality here, e.g., call the login function with username and password.
    login( username, pass );
    setPass("");
    setUsername("");
  };

  return (
    <>
      <div className="login-cont">
        <form className="inner-login" onSubmit={handleLogin}>
          <label htmlFor="nameField">Enter Your Name</label>
          <input
            type="text"
            id="nameField"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="passField">Password</label>
          <input
            type="password"
            id="passField"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <button className="submit-button" type="submit">
            Login
          </button>
          <div className="bottom">
            Don't have an Account? <Link to="/username">SignUp</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
