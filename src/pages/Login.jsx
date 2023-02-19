import React from "react";
import logo from "../assets/images/logo1.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">
          <img src={logo} alt="logo" />
        </span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form>
        <p>Not yet registered? Register</p>
      </div>
    </div>
  );
};

export default Login;
