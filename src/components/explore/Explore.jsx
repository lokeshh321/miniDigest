import { Container, Divider, Grid, Stack } from '@mui/material';
import React, { useContext } from 'react';

import { UserContext } from '../../utils/UserContext';
import Greeting from '../shared/Greeting';
import ArticleVert from './ArticleVert';
import FactOfTheDay from './FactOfTheDay';
import TodayInHistory from './TodayInHistory';

export default function Explore() {
  const { userInfo } = useContext(UserContext);

  return (
    <Container maxWidth="lg" style={{ marginTop: '1rem' }}>
      <Greeting />
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            maxHeight: '100vh',
            overflowY: 'scroll',
            marginRight: '2rem',
          }}
        >
          <Stack spacing={4}>
            <ArticleVert />
            <ArticleVert />
          </Stack>
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          style={{
            marginLeft: '2rem',
            backgroundColor: '#000000',
            width: '2px',
          }}
        />
        <Grid item xs={12} md={3}>
          <Stack spacing={6}>
            <FactOfTheDay />
            <TodayInHistory />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
