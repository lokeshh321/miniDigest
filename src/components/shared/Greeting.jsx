import { Stack, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../../utils/UserContext';

export default function Greeting() {
  const { userInfo } = useContext(UserContext);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = new Date();
      setCurrentDate(newDate);

      const hour = newDate.getHours();
      let newGreeting;
      if (hour >= 6 && hour < 12) {
        newGreeting = 'Good Morning';
      } else if (hour >= 12 && hour < 18) {
        newGreeting = 'Good Afternoon';
      } else {
        newGreeting = 'Good Evening';
      }
      setGreeting(newGreeting);
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
        {greeting}, {userInfo.username}
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
