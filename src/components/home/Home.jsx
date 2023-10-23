import { Container, Stack } from '@mui/material';
import React, { useContext } from 'react';

import { UserContext } from '../../utils/UserContext';
import Greeting from './Greeting';
import PreferenceBar from './PreferenceBar';
import StyliseCard from './StyliseCard';
import SummarySection from './Summary';

export default function Home() {
  const { userInfo } = useContext(UserContext);
  return (
    <Container maxWidth="xl">
      {Object.keys(userInfo).length !== 0 ? (
        <Stack>
          <PreferenceBar preferences={userInfo.preferences} />
          <Greeting name={userInfo.username} />
          <Stack direction="row" spacing={3} flex={1}>
            <div style={{ flexBasis: '70%' }}>
              <SummarySection userInfo={userInfo} />
            </div>
            <div style={{ flexBasis: '30%' }}>
              <StyliseCard />
            </div>
          </Stack>
        </Stack>
      ) : (
        <div />
      )}
    </Container>
  );
}
