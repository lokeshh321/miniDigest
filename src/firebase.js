import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBvt97dhWfAarZ48P-OpSr2YFHI1nlPwv8',
  authDomain: 'sc2006-project-4695d.firebaseapp.com',
  databaseURL:
    'https://sc2006-project-4695d-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'sc2006-project-4695d',
  storageBucket: 'sc2006-project-4695d.appspot.com',
  messagingSenderId: '693087631535',
  appId: '1:693087631535:web:15d8e23d6b9395064abc5a',
  measurementId: 'G-HWX5DH1JH1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

export default database;
