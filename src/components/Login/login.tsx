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

      navigate("/")
    } catch (error) {
      console.log("couldn't login")
    }
  };

  return (
    <div className="h-screen w-screen relative p-4 flex flex-col justify-center items-center relative">

      <div className="flex w-full h-full absolute top-0">
      <div className="left">
          <img src={bookAnimation} alt="Book Placeholder" style={{ width: '600px' }} />
        </div>
        <div className="left">
          <div className="w-min h-min p-10 bg-white rounded-lg z-50 mt-20 scale-75">
          <div className="form-container">
            <div className="my-login">Hello !</div>
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
              <label style={{ fontSize: '28px', textAlign: 'left' }}>Email</label>

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
            </form>
            <button className="sign-in-button" style={{ fontFamily: 'Cherry Bomb', fontSize: '44px', borderRadius: '20px' }} onClick={handleSubmit}>Sign In</button>
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
    </div>
  );
}

export default Login;