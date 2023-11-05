import './Profile.css'; // Import the CSS file

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Container, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
  updatePassword,
} from 'firebase/auth';
import React, { useContext, useState } from 'react';

import { auth } from '../../configs/firebase';
import { UserContext } from '../../utils/UserContext';
import { updateUserInfo } from '../../utils/UserManager';

function Profile() {
  const { userID, userInfo } = useContext(UserContext);
  const [editedUsername, setEditedUsername] = useState(userInfo.username);
  const [editedAge, setEditedAge] = useState(userInfo.age);
  const [editedCountry, setEditedCountry] = useState(userInfo.country);
  const [editedEmail, setEditedEmail] = useState(userInfo.email);

  const [oldPassword, setOldPassword] = useState('');
  const [editedPassword, setEditedPassword] = useState('');

  const handlePasswordReset = () => {
    const user = auth.currentUser;

    // verify old password
    const credential = EmailAuthProvider.credential(user.email, oldPassword);
    reauthenticateWithCredential(user, credential)
      .then(() => {
        // update with new password
        updatePassword(user, editedPassword)
          .then(() => {
            alert('Sucessfully updated password!');
          })
          .catch((error) => {
            // invalid if firebase checks password is insecure
            alert(error);
          });
      })
      .catch((error) => {
        alert('Invalid password');
      });
  };

  const handleEmailReset = () => {
    // update firebase email
    const user = auth.currentUser;
    // verify account
    const credential = EmailAuthProvider.credential(user.email, oldPassword);

    reauthenticateWithCredential(user, credential)
      .then(() => {
        // update with new email
        updateEmail(user, editedEmail)
          .then(() => {
            // update user info in database
            updateUserInfo(userID, 'email', editedEmail);
            alert('Successfully updated email!');
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleParticularUpdate = () => {
    updateUserInfo(userID, 'username', editedUsername);
    updateUserInfo(userID, 'age', editedAge);
    updateUserInfo(userID, 'country', editedCountry);

    if (editedEmail !== userInfo.email) {
      handleEmailReset(editedEmail);
    }
  };

  // calculate existence duration
  const calculateExistenceDuration = () => {
    const registrationDate = new Date(userInfo.registration_date);
    const currentDate = new Date();
    const timeDifference = currentDate - registrationDate;
    const daysSinceRegistration = Math.floor(
      timeDifference / (1000 * 60 * 60 * 24)
    );
    return daysSinceRegistration;
  };

  const existenceDuration = calculateExistenceDuration();

  return (
    <Container width="xm">
      <div className="profile-container">
        <Stack direction="row" spacing={7} style={{ margin: 'auto' }}>
          <AccountCircleIcon
            style={{
              width: '20vw',
              height: '20vw', // Set a fixed height to maintain the aspect ratio
              alignSelf: 'center',
            }}
          />
          <Stack style={{ alignSelf: 'center', paddingRight: '30px' }}>
            <Stack direction="row" spacing={5}>
              <TextField
                id="filled-username"
                label="Username"
                variant="outlined"
                value={editedUsername}
                error={editedUsername === ''}
                helperText={editedUsername === '' ? 'Empty field!' : ' '}
                onChange={(e) => setEditedUsername(e.target.value)}
              />
              <TextField
                id="filled-email"
                label="Email"
                variant="outlined"
                value={editedEmail}
                error={editedEmail === ''}
                helperText={editedEmail === '' ? 'Empty field!' : ' '}
                onChange={(e) => setEditedEmail(e.target.value)}
              />
            </Stack>
            <Stack direction="row" spacing={5}>
              <TextField
                id="filled-country"
                label="Country"
                variant="outlined"
                error={editedCountry === ''}
                helperText={editedCountry === '' ? 'Empty field!' : ' '}
                value={editedCountry}
                onChange={(e) => setEditedCountry(e.target.value)}
              />
              <TextField
                id="filled-age"
                label="Age"
                variant="outlined"
                type="number"
                value={editedAge}
                error={editedAge === '' || editedAge <= 1}
                helperText={
                  editedAge === ''
                    ? 'Empty field!'
                    : editedAge <= 1
                    ? 'Invalid age!'
                    : ' '
                }
                onChange={(e) => setEditedAge(parseInt(e.target.value))}
              />
            </Stack>
            <Stack direction="row" spacing={5}>
              <TextField
                id="filled-old-password"
                label="Old Password"
                variant="outlined"
                placeholder="Enter current password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <TextField
                id="filled-new-password"
                label="New Password"
                variant="outlined"
                placeholder="Enter new password"
                value={editedPassword}
                onChange={(e) => setEditedPassword(e.target.value)}
              />
            </Stack>
            <Stack direction="row" spacing={5} paddingTop={3.5}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleParticularUpdate}
                className="update-particulars-button"
              >
                Update Particulars
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handlePasswordReset}
                className="reset-password-button"
              >
                Reset Password
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </div>
      <div className="bottom-text">
        <p className="existence-duration">
          {`${existenceDuration} days since you've started digesting`}
        </p>
      </div>
    </Container>
  );
}

export default Profile;
