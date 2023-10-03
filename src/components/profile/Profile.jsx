import React, { useState } from "react";
import "./Profile.css"; // Import the CSS file
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Profile() {
  // Sample user data (you can replace this with your actual data)
  const [user, setUser] = useState({
    username: "JohnDoe",
    age: 30,
    country: "United States",
    // You can replace the 'profileImageUrl' with the actual image URL.
    profileImageUrl: "https://kingchoice.me/media/CACHE/images/f8eafe2ea6bc830e9ea548af6e67cb3c_ov9i5Q7/e929857f3a96b9c0779601c019be1ddc.jpg",
    registrationDate: "2023-01-01",
  });

  // State variables to track edited user information
  const [editedUsername, setEditedUsername] = useState(user.username);
  const [editedAge, setEditedAge] = useState(user.age);
  const [editedCountry, setEditedCountry] = useState(user.country);

  // Function to handle saving edited user information
  const saveUserInfo = () => {
    setUser({
      ...user,
      username: editedUsername,
      age: editedAge,
      country: editedCountry,
    });
  };

  // Function to handle button click and return a value
  const handleButtonClick = (value) => {
    // You can perform additional actions here if needed
    console.log(`Button clicked: ${value}`);
  };

  // Calculate the user's existence duration
  const calculateExistenceDuration = () => {
    const registrationDate = new Date(user.registrationDate);
    const currentDate = new Date();
    const timeDifference = currentDate - registrationDate;
    const daysSinceRegistration = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysSinceRegistration;
  };

  const existenceDuration = calculateExistenceDuration();

  return (
    <div>
      {/* Stylish Text */}
      <div className="stylish-text-container">
        <p className="stylish-text">
          Tell us more! We hope to provide you with more customized content.
        </p>
        <div className="snowflakes" aria-hidden="true">
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
        </div>
      </div>

      {/* Profile Container */}
      <div className="profile-container">
        <div className="profile-picture">
          <img src={user.profileImageUrl} alt="Profile" />
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleButtonClick("Update Profile Icon")}
            className="update-profile-button"
          >
            Update Profile Icon
          </Button>
        </div>
        <div className="profile-details">
          <div className="user-info">
            <div className="profile-info-textfields">
              <TextField
                id="filled-username"
                label="Username"
                variant="filled"
                value={editedUsername}
                onChange={(e) => setEditedUsername(e.target.value)}
              />
              <TextField
                id="filled-age"
                label="Age"
                variant="filled"
                type="number"
                value={editedAge}
                onChange={(e) => setEditedAge(parseInt(e.target.value))}
              />
              <TextField
                id="filled-country"
                label="Country"
                variant="filled"
                value={editedCountry}
                onChange={(e) => setEditedCountry(e.target.value)}
              />
            </div>
          </div>
          <div className="buttons-container">
            <div className="update-particulars-button">
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleButtonClick("Update Particulars")}
                className="update-particulars-button"
              >
                Update Particulars
              </Button>
            </div>
            <div className="reset-password-button">
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleButtonClick("Reset Password")}
                className="reset-password-button"
              >
                Reset Password
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-text">
      <p className="existence-duration">
          {`${existenceDuration} days since you've started digesting`}
        </p>
      </div>
    </div>
  );
}

export default Profile;
