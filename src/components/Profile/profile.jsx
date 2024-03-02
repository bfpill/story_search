import React, { useState } from "react";
// import { useHistory } from "react-router-dom"; // Import useHistory from React Router
import "./profile.css";
import profileDefault from "../../assets/profile_default.png";
import gorillaAvatar from "../../assets/gorilla_profile.png";
import catAvatar from "../../assets/cat_profile.png";
import dogAvatar from "../../assets/dog_profile.png";

function Profile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(5);
  const [avatar, setAvatar] = useState(null);
  // const history = useHistory();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeIncrease = () => {
    setAge((prevAge) => Math.min(prevAge + 1, 12)); // Maximum age = 12
  };

  const handleAgeDecrease = () => {
    setAge((prevAge) => Math.max(prevAge - 1, 3)); // Minimum age = 3
  };

  const handleAvatarSelect = (selectedAvatar) => {
    setAvatar(selectedAvatar);
  };

  const handleGenerateProfile = () => {
    console.log("Generated Profile:");
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Avatar:", avatar);
    // Here, we can add logic to save the profile details, or perform any other actions needed
    // Navigate to another page after generating the profile:
    // history.push("/another-page");
  };

  return (
    <div className="container">
      <div className="left">
        <img
          src={profileDefault}
          alt="Profile stock image"
          className="centered-image"
        />
      </div>
      <div className="right">
        <div className="form-container">
          <div className="my-login">About me</div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-wrapper">
              <label style={{ fontSize: "28px" }}>What is your name?</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="input-wrapper">
              <label style={{ fontSize: "28px" }}>How old are you?</label>
              <div className="age-slider">
                <div className="slider">
                  <div className="decrease" onClick={handleAgeDecrease}>
                    -
                  </div>
                  <div className="age">{age}</div>
                  <div className="increase" onClick={handleAgeIncrease}>
                    +
                  </div>
                </div>
              </div>
            </div>
            <div className="input-wrapper">
              <label style={{ fontSize: "28px" }}>Choose your avatar:</label>
              <div className="avatar-options">
                <img
                  src={gorillaAvatar}
                  alt="Gorilla Avatar"
                  className={avatar === gorillaAvatar ? "selected" : ""}
                  onClick={() => handleAvatarSelect(gorillaAvatar)}
                />
                <img
                  src={catAvatar}
                  alt="Cat Avatar"
                  className={avatar === catAvatar ? "selected" : ""}
                  onClick={() => handleAvatarSelect(catAvatar)}
                />
                <img
                  src={dogAvatar}
                  alt="Dog Avatar"
                  className={avatar === dogAvatar ? "selected" : ""}
                  onClick={() => handleAvatarSelect(dogAvatar)}
                />
              </div>
            </div>
            <div className="input-wrapper">
              <button
                className="generate-profile-button"
                type="button"
                onClick={handleGenerateProfile}
              >
                Generate Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
