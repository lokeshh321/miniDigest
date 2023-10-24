import { Container, Stack } from '@mui/material';
import React, { useContext } from 'react';

import { UserContext } from '../../utils/UserContext';
import Greeting from '../shared/Greeting';
import ArticleVert from './ArticleVert';
import FactOfTheDay from './FactOfTheDay';
import TodayInHistory from './TodayInHistory';

export default function Explore() {
  const { userInfo } = useContext(UserContext);

  return (
    <Container width="xm" style={{ marginTop: '1rem' }}>
      {/* {Object.keys(userInfo).length !== 0 ? (
        <PreferenceBar preferences={userInfo.preferences} />
      ) : (
        <div />
      )} */}
      <Greeting />

      <Stack direction="row" spacing={4}>
        <ArticleVert />
        <Stack direction="column" spacing={5}>
          <FactOfTheDay />
          <TodayInHistory />
        </Stack>
      </Stack>
    </Container>
  );
}
