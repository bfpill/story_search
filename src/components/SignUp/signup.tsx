import React, { useContext, useState } from 'react';
import './signup.css';
import bookAnimation from '../../assets/bookAnimation.gif';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createUser } from '@/api';
import { auth } from '../../firebase-config.js'
import { CurrentUserContext } from '@/UserProvider';
import { useNavigate } from 'react-router-dom';
import { Input } from '../ui/input';
import { HomeBar } from '../NavBar.js';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMismatchError, setPasswordMismatchError] = useState('');
  const { setUser } = useContext(CurrentUserContext);

  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    console.log(email, password)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("created User cred")
      createUser(email)

      console.log("User created:", userCredential.user);

      setUser(userCredential.user)
      navigate("/library")
    } catch (error) {
      console.error(error)
      if (error.code === 'auth/email-already-in-use') {
        // console.error("Error signing up:", error.message);
        // createAccountForm.setError("email", {
        //     type: "manual",
        //     message: "Email is already in use."
        // });
      } else {
        console.error("Error signing up:", error.message);
        // createAccountForm.setError("email", {
        //     type: "manual",
        //     message: error.message
        // });
      }
    }
  };

  return (
    <div className="h-screen w-screen relative p-4 flex flex-col justify-center items-center relative">
      <HomeBar onSearchChange={function (event: any): unknown {
        throw new Error("Function not implemented.")
      }} />
      <div className="flex w-full h-full absolute top-0">
        <div className="left">
          <img src={bookAnimation} alt="Book Placeholder" style={{ width: '600px' }} />
        </div>
        <div className="right">
          <div className="w-min h-min p-10 bg-white rounded-lg z-50 mt-20 scale-75">
            <div className="form-container">
              <div className="my-login">Sign Up !</div>
              <div className="input-wrapper">
                <label style={{ fontSize: '28px' }}>Parent email</label>
                <Input
                  type="email"
                  value={email}
                  placeholder="example@mail.com"
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="input-wrapper">
                <label style={{ fontSize: '28px' }}>Password</label>
                <Input
                  type="password"
                  value={password}
                  placeholder="****"
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="input-wrapper" style={{ paddingBottom: '50px' }}>
                <label style={{ fontSize: '28px' }}>Confirm password</label>
                <Input
                  type="password"
                  value={confirmPassword}
                  placeholder="****"
                  onChange={handleConfirmPasswordChange}
                  required
                />
              </div>
              {passwordMismatchError && <div className="error">{passwordMismatchError}</div>}
              <div className="sign-in-button" style={{ fontFamily: 'Cherry Bomb', fontSize: '44px', borderRadius: '20px'}}
                type="submit" onClick={(e) => handleSubmit(e)}>Sign Up</div>
            </div>
          </div>
        </div>
        </div>

      </div>
    );
    
  }

export default SignUp;
