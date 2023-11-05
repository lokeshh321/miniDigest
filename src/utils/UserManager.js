import { get, off, onValue, ref, set, update } from 'firebase/database';

import { db } from '../configs/firebase';

export function fetchUserData(userID) {
  const dbref = ref(db, `/users/${userID}`);
  return new Promise((resolve, reject) => {
    onValue(dbref, (snapshot) => {
      if (snapshot.exists()) {
        resolve(snapshot.val());
      } else {
        reject(new Error('Snapshot does not exist'));
      }
    });
  });
}

export function syncUserPreferences(userID, buttonStates, allButtonState) {
  const userRef = ref(db, `/users/${userID}`);

  return new Promise((resolve, reject) => {
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const updatePreference = {
            all: allButtonState,
            tech: buttonStates.Tech,
            science: buttonStates.Science,
            sports: buttonStates.Sports,
            business: buttonStates.Business,
            health: buttonStates.Health,
            entertainment: buttonStates.Entertainment,
          };

          return update(userRef, {
            preferences: updatePreference,
          });
        }
        reject(new Error('User data not found'));
        return null;
      })
      .then(() => {
        resolve('Preferences updated successfully');
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function updateUserInfo(userID, infoField, updatedValue) {
  const userRef = ref(db, `/users/${userID}`);

  return new Promise((resolve, reject) => {
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          return update(userRef, {
            [infoField]: updatedValue,
          });
        }
        reject(new Error('User data not found'));
        return null;
      })
      .then(() => {
        resolve('Data updated successfully');
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Create a listener on database for a specific user
export function createUserListener(userID, callback) {
  const dbRef = ref(db, `/users/${userID}`);

  const listener = onValue(dbRef, (snapshot) => {
    if (snapshot.exists()) {
      callback(snapshot.val());
    }
  });

  return listener;
}

// Stop database listener
export function stopUserListener(listener) {
  if (listener) {
    off(listener);
  }
}

export function createNewUserProfile(user, userName) {
  const age = 21;
  const country = 'Singapore';

  // get registration date in YYYY-MM-DD format
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  const userDetails = {
    username: userName,
    email: user.email,
    age,
    country,
    profile_pic_url: '',
    preferences: {
      all: true,
      tech: false,
      science: false,
      sports: false,
      business: false,
      health: false,
      entertainment: false,
    },
    stylise_prompt: '',
    registration_date: formattedDate,
  };

  // post new profile to firebase
  const dbref = ref(db, `/users/${user.uid}`);
  set(dbref, userDetails)
    .then(() => {
      console.log('created new profile');
    })
    .catch((error) => {
      console.error('Error adding data:', error);
    });
}
