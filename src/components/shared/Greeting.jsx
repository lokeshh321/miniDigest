import { Stack, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../../utils/UserContext';

export default function Greeting() {
  const { userInfo } = useContext(UserContext);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ paddingBottom: 3, paddingTop: 2 }}
    >
      <Typography sx={{ fontSize: '25px' }}>
        Good Morning, {userInfo.username}
      </Typography>
      <Typography variant="body1">
        {currentDate.toLocaleDateString(undefined, {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}{' '}
        |{' '}
        {currentDate.toLocaleTimeString(undefined, {
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })}
      </Typography>
    </Stack>
  );
}
