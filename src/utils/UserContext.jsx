import { createContext, useEffect, useMemo, useState } from 'react';

import {
  createUserListener,
  fetchUserData,
  stopUserListener,
} from './UserManager';

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [userID, setUserID] = useState('000');
  const [userInfo, setUserInfo] = useState({});
  const [requireRender, setRenderUpdate] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  // Fetch user data
  useEffect(() => {
    fetchUserData(userID).then((info) => {
      setUserInfo(info);
    });
  }, [userID]);

  // listen to changes on for user data
  useEffect(() => {
    const listener = createUserListener(userID, (updatedUserData) => {
      setUserInfo(updatedUserData);
    });

    return () => {
      stopUserListener(listener); // cleanup
    };
  }, [userID]);

  const value = useMemo(
    () => ({
      userID,
      userInfo,
      setUserInfo,
      requireRender,
      setRenderUpdate,
      responseMsg,
      setResponseMsg,
    }),
    [userID, userInfo, requireRender, responseMsg]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, UserContextProvider };
