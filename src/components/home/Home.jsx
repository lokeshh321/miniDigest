import { Container, Stack } from '@mui/material';
import React from 'react';

import Greeting from './Greeting';
import PreferenceBar from './PreferenceBar';
import StyliseCard from './StyliseCard';
import SummarySection from './Summary';

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Stack>
        <PreferenceBar />
        <Greeting />
        <Stack direction="row" spacing={3} flex={1}>
          <div style={{ flexBasis: '70%' }}>
            <SummarySection />
          </div>
          <div style={{ flexBasis: '30%' }}>
            <StyliseCard />
          </div>
        </Stack>
      </Stack>
    </Container>
  );
}
