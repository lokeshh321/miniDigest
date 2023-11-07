import { Stack, Typography } from '@mui/material';
import React, { useContext, useEffect, useMemo, useState } from 'react';

import { UserContext } from '../../utils/UserContext';

export default function Greeting() {
  const { userInfo } = useContext(UserContext);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [greeting, setGreeting] = useState('');

  function streamGreeting(newGreeting) {
    for (let i = 0; i < newGreeting.length; i += 1) {
      setTimeout(() => {
        setGreeting((prevGreeting) => prevGreeting + newGreeting[i]);
      }, i * 50); // delay render of character
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // update clock

    return () => clearInterval(interval);
  }, []);

  useMemo(() => {
    const newDate = new Date();
    const hour = newDate.getHours();
    let newGreeting;
    if (hour >= 6 && hour < 12) {
      newGreeting = 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
      newGreeting = 'Good Afternoon';
    } else {
      newGreeting = 'Good Evening';
    }

    if (greeting === '') {
      streamGreeting(`${newGreeting}, ${userInfo.username}`);
    }
  }, [userInfo, greeting]);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ paddingBottom: 3, paddingTop: 2 }}
    >
      <Typography sx={{ fontSize: '25px' }}>{greeting}</Typography>
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
