import React, { useContext, useState } from "react";
import "./profile.css";
import gorillaAvatar from "../../assets/gorilla_profile.png";
import catAvatar from "../../assets/cat_profile.png";
import dogAvatar from "../../assets/dog_profile.png";
import { CurrentUserContext } from "@/UserProvider";
import { updateUser } from "@/api";
import { HomeBar } from "../NavBar";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(5);
  const [avatar, setAvatar] = useState(null);

  const { user, setUser } = useContext(CurrentUserContext)

  const navigate = useNavigate();
  //
  // const history = useHistory();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeIncrease = () => {
    setAge((prevAge) => Math.min(prevAge + 1, 12));
  };

  const handleAgeDecrease = () => {
    setAge((prevAge) => Math.max(prevAge - 1, 3));
  };

  const handleAvatarSelect = (selectedAvatar) => {
    setAvatar(selectedAvatar);
  };

  const handleGenerateProfile = () => {
    console.log("Generated Profile:");
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Avatar:", avatar);

    const newUserData = { email: user.email, uid: user.uid, name: name, age: age, avatar: avatar }
    setUser(newUserData)
    updateUser(user.email, newUserData)
    navigate("/library")
  };

  return (
      <div className="h-screen w-screen relative p-4 flex bg-blue-300 justify-center items-center relative">
        <div className="z-20 absolute top-4 rounded-full">
          <HomeBar expand={false} />
        </div>
        <div className="w-min h-min p-10 bg-white rounded-lg z-50 mt-20 scale-75">
          <div className="form-container">
            <div className="my-name">About me</div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-wrapper1">
                <label style={{ fontSize: "22px" }}>What is your name?</label>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div className="input-wrapper1">
                <label style={{ fontSize: "22px" }}>How old are you?</label>
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
              <div className="input-wrapper1">
                <label style={{ fontSize: "22px" }}>Choose your avatar:</label>
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
              <div className="input-wrapper1">
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
