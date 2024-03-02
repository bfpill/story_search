import React, { useContext, useState } from 'react';
import './login.css'; // Import the CSS file
import bookAnimation from '../../assets/bookAnimation.gif'; 
import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '@/UserProvider';
import { HomeBar } from '../NavBar';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(CurrentUserContext)
  const navigate = useNavigate();

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
      console.log("couldn't login")
    }
  };

  return (
    <div className="h-screen w-screen relative p-4 flex flex-col justify-center items-center relative">
      <div className="z-20 absolute top-4 rounded-full">
        <HomeBar onSearchChange={function (event: any): unknown {
          throw new Error("Function not implemented.");
        } } expand={false} />
      </div>
      <div className="flex w-full h-full absolute top-0">
      <div className="left">
          <img src={bookAnimation} alt="Book Placeholder" className="centered-image" />
        </div>
        <div className="right">
          <div className="form-container">
            <div className="my-login">Hello !</div>
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label style={{ fontSize: '28px' }}>Email</label>
                <input
                  type="email"
                  value={email}
                  placeholder="example@mail.com"
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="input-wrapper">
                <label style={{ fontSize: '28px' }}>Password</label>
                <input
                  type="password"
                  placeholder="****"
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button type="submit">Login</button>
            </form>
            <button className="sign-in-button" style={{ fontFamily: 'Cherry Bomb', fontSize: '44px', borderRadius: '20px' }}>Sign In</button>
            <div className="forget-password">
              <p>Forgot Password?</p>
            </div>
            <div className="no-account">
              <p>Don't Have an Account?</p>
            </div>
            <div onClick={() => { navigate("/sign_up") }} className="create-account mt-3">
              <p>Create Account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;