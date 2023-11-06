import { Container } from '@mui/material';
import React from 'react';

import Greeting from '../shared/Greeting';
import TrendingSection from './TrendingSection';

function Trending() {
  return (
    <main>
      <Container width="xm" style={{ marginTop: '1rem' }}>
        <Greeting />
      </Container>
      <div style={{ marginLeft: '8vw', marginRight: '8vw' }}>
        <TrendingSection />
      </div>
    </main>
  );
}

export default Trending;
