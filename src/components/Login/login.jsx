import React, { useState } from 'react';
import './login.css'; // Import the CSS file
import bookPlaceholder from '/Users/cher/Desktop/story_search/src/assets/book_placeholder.png'; // Import the image


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your login logic here, e.g., calling an authentication API
    console.log("Email:", email);
    console.log("Password:", password);
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


