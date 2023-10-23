import { get, off, onValue, ref, update } from 'firebase/database';

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
