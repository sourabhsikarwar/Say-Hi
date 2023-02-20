import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo1.png";
import { auth } from "../firebase"
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">
          <img src={logo} alt="logo" />
        </span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form>
        {err && <span className="error">Something went wrong</span>}
        <p>Not yet registered? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
