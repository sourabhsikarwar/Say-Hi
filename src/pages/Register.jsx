import React, { useState } from "react";
import avatar from "../assets/images/addAvatar.png";
import logo from "../assets/images/logo1.png";
import {} from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {

  const [err, setErr] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)
      
    } catch(err){
      setErr(true)
      console.log(err.message)
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">
          <img src={logo} alt="logo" />
        </span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <input type="file" id="file" />
          <label htmlFor="file">
            <img src={avatar} alt="avatar" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span className="error">Something went wrong</span>}
        </form>
        <p>Already registered? Login</p>
      </div>
    </div>
  );
};

export default Register;
