import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';

import PreferenceBar from '../home/PreferenceBar';
import ArticleVert from './ArticleVert';
import FactOfTheDay from './FactOfTheDay';
import TodayInHistory from './TodayInHistory';

function Explore() {
  return (
    <Container>
      <PreferenceBar />

      <Typography variant="h5" gutterBottom style={{ marginTop: '50px' }}>
        Good Morning,
      </Typography>

      <Typography variant="h6" gutterBottom style={{ marginBottom: '50px' }}>
        John!
      </Typography>

      <Grid container spacing={3}>
        {/* Left side - scrollable */}
        <Grid item xs={9} style={{ maxHeight: '100vh', overflowY: 'auto' }}>
          <ArticleVert />
        </Grid>

        {/* Right side - static */}
        <Grid item xs={3} style={{ height: '100vh' }}>
          <FactOfTheDay />
          <TodayInHistory />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Explore;
