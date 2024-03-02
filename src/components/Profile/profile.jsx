import React, { useState } from 'react';
import './profile.css'; // Import the CSS file
import bookPlaceholder from '../../assets/profile_default.png';
import gorillaAvatar from '../../assets/gorilla_profile.png';
import catAvatar from '../../assets/cat_profile.png';
import dogAvatar from '../../assets/dog_profile.png';

function Login() {
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(5); // Default age value
  const [avatar, setAvatar] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAgeIncrease = () => {
    setAge(prevAge => Math.min(prevAge + 1, 12)); // Cap maximum age to 12
  };

  const handleAgeDecrease = () => {
    setAge(prevAge => Math.max(prevAge - 1, 3)); // Cap minimum age to 3
  };

  const handleAvatarSelect = (selectedAvatar) => {
    setAvatar(selectedAvatar);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Age:", age);
    console.log("Avatar:", avatar); // Log selected avatar

    // You can include additional logic here to handle form submission
  };

  return (
    <div className="container">
      <div className="left">
        <img src={bookPlaceholder} alt="Book Placeholder" className="centered-image" />
      </div>
      <div className="right">
        <div className="form-container">
          <div className="my-login">About me</div>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label style={{ fontSize: '28px' }}>What is your name?</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="input-wrapper">
              <label style={{ fontSize: '28px' }}>How old are you?</label>
              <div className="age-slider">
                <div className="slider">
                  <div className="decrease" onClick={handleAgeDecrease}>-</div>
                  <div className="age">{age}</div>
                  <div className="increase" onClick={handleAgeIncrease}>+</div>
                </div>
              </div>
            </div>
            <div className="input-wrapper">
              <label style={{ fontSize: '28px' }}>Choose your avatar:</label>
              <div className="avatar-options">
                <img
                  src={gorillaAvatar}
                  alt="Gorilla Avatar"
                  className={avatar === gorillaAvatar ? 'selected' : ''}
                  onClick={() => handleAvatarSelect(gorillaAvatar)}
                />
                <img
                  src={catAvatar}
                  alt="Cat Avatar"
                  className={avatar === catAvatar ? 'selected' : ''}
                  onClick={() => handleAvatarSelect(catAvatar)}
                />
                <img
                  src={dogAvatar}
                  alt="Dog Avatar"
                  className={avatar === dogAvatar ? 'selected' : ''}
                  onClick={() => handleAvatarSelect(dogAvatar)}
                />
              </div>
              <input type="hidden" value={avatar} />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;