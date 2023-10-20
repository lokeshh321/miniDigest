import { Container, Stack } from '@mui/material';
import { onValue, ref } from 'firebase/database';
import React, { useMemo, useState } from 'react';

import { db } from '../../configs/firebase';
import Greeting from './Greeting';
import PreferenceBar from './PreferenceBar';
import StyliseCard from './StyliseCard';
import SummarySection from './Summary';

export default function Home() {
  const userID = '000';
  const [userInfo, setUserInfo] = useState({});

  useMemo(() => {
    const dbref = ref(db, `/users/${userID}`);
    return onValue(dbref, (snapshot) => {
      const info = snapshot.val();
      if (snapshot.exists()) {
        setUserInfo(info);
      }
    });
  }, [userID]);

  return (
    <Container maxWidth="xl">
      <Stack>
        <PreferenceBar />
        <Greeting name={userInfo.username} />
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
