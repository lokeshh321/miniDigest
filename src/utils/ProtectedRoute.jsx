import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../configs/firebase';
import { UserContextProvider } from './UserContext';

// get current user
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => setCurrentUser(user));
    return unSubscribe;
  }, []);
  return currentUser;
}

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const user = useAuth();
  return user === 'undefined' ? (
    <h1>Loading....</h1>
  ) : user ? (
    <UserContextProvider user={user}>{children}</UserContextProvider>
  ) : (
    navigate('/')
  );
}
