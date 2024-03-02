import React, { useState } from 'react';
import './login.css'; // Import the CSS file
import bookPlaceholder from '../../assets/book_placeholder.png'

import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user, userCredential);
      setUser(userCredential.user)
      navigate("/lockerroom")
    } catch (error) {
      loginForm.setError("email", {
        type: "manual",
        message: "Email doesn't exist! Create an account below"
      });
    }
  };

  return (
    <div className="container">
      <div className="left">
      <img src={bookPlaceholder} alt="Book Placeholder" className="centered-image" />
      </div>
      <div className="right">
        <div className="form-container">
          <div className="my-login">Hello !</div>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
            <label style={{ fontSize: '28px'}}>Email</label>
              <input
                type="email"
                value={email}
                placeholder="example@mail.com"
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="input-wrapper">
              <label style={{ fontSize: '28px'}}>Password</label>
              <input
                type="password"
                placeholder="****"
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <button className="sign-in-button" style={{ fontFamily: 'Cherry Bomb', fontSize: '44px', borderRadius: '20px'}}>Sign In</button>


          <div className="forget-password">
            <p>Forgot Password?</p>
          </div>
          <div className="no-account">
            <p>Don't Have an Account?</p>
          </div>
          <div className="create-account">
            <p>Create Account?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


