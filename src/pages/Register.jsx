import React, { useState } from "react";
import avatar from "../assets/images/addAvatar.png";
import logo from "../assets/images/logo1.png";
import {} from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate, Link } from "react-router-dom"

const Register = () => {
  const [err, setErr] = useState(false);
  const [fileName, setFileName] = useState("Add an Avatar")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {})
            navigate("/login")
          });

        }
      );
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };

  const handleFile = (e) => {
    e.preventDefault()
    setFileName(e.target.files[0].name)
  }

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
          <input type="file" id="file" onChange={handleFile} />
          <label htmlFor="file">
            <img src={avatar} alt="avatar" />
            <span>{fileName.slice(0, 15)}</span>
          </label>
          <button>Sign up</button>
          {err && <span className="error">Something went wrong</span>}
        </form>
        <p>Already registered? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
