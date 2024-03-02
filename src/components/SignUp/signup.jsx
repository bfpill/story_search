import React, { useState } from 'react';
import './signup.css'; // Import the CSS file
import bookPlaceholder from '../../assets/book_placeholder.png'; // Import the image

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMismatchError, setPasswordMismatchError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMismatchError("Password and Confirm Password do not match.");
    } else {
      setPasswordMismatchError("");
      // Add your sign-up logic here
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <div className="container">
      <div className="left">
        <img src={bookPlaceholder} alt="Book Placeholder" className="centered-image" />
      </div>
      <div className="right">
        <div className="form-container">
          <div className="my-login">Sign Up !</div>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label style={{ fontSize: '28px'}}>Parent email</label>
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
                value={password}
                placeholder="****"
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="input-wrapper"  style={{ paddingBottom: '50px' }}>
              <label style={{ fontSize: '28px'}}>Confirm password</label>
              <input
                type="password"
                value={confirmPassword}
                placeholder="****"
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            {passwordMismatchError && <div className="error">{passwordMismatchError}</div>}
            <button className="sign-in-button" style={{ fontFamily: 'Cherry Bomb', fontSize: '44px', borderRadius: '20px'}} type="submit">Sign Up</button>
          </form>
         
        </div>
      </div>
    </div>
  );
}

export default SignUp;
