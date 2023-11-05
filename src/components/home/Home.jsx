import { Container, Stack } from '@mui/material';
import React, { useContext } from 'react';

import { UserContext } from '../../utils/UserContext';
import Greeting from '../shared/Greeting';
import HomePreferenceBar from './HomePreferenceBar';
import StyliseCard from './StyliseCard';
import SummarySection from './Summary';

export default function Home() {
  const { userID, userInfo } = useContext(UserContext);
  return (
    <Container width="xm" style={{ marginBottom: '5rem' }}>
      {Object.keys(userInfo).length !== 0 ? (
        <Stack>
          <HomePreferenceBar preferences={userInfo.preferences} />
          <Greeting />
          <Stack direction="row" spacing={3} flex={1}>
            <div style={{ flexBasis: '70%' }}>
              <SummarySection userInfo={userInfo} />
            </div>
            <div style={{ flexBasis: '30%' }}>
              <StyliseCard userID={userID} userInfo={userInfo} />
            </div>
          </Stack>
        </Stack>
      ) : (
        <div />
      )}
    </Container>
  );
}
