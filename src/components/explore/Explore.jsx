import { Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../../utils/UserContext';
import ArticleVert from './ArticleVert';
import FactOfTheDay from './FactOfTheDay';
import TodayInHistory from './TodayInHistory';

export default function Explore() {
  const { userInfo } = useContext(UserContext);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Container>
      {/* {Object.keys(userInfo).length !== 0 ? (
        <PreferenceBar preferences={userInfo.preferences} />
      ) : (
        <div />
      )} */}
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography
            variant="h6"
            gutterBottom
            style={{ fontSize: 28, marginTop: '50px', fontWeight: 'bold' }}
          >
            Good Morning,
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            style={{ fontSize: 24, marginBottom: '50px', fontWeight: 'bold' }}
          >
            John!
          </Typography>
        </Grid>
        <Grid item>
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
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={9} style={{ maxHeight: '100vh', overflowY: 'auto' }}>
          <ArticleVert />
        </Grid>
        <Grid item xs={2.5} style={{ marginLeft: '30px', height: '100vh' }}>
          <Stack direction="column" spacing={5}>
            <FactOfTheDay />
            <TodayInHistory />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
