import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function Greeting() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ paddingBottom: 3 }}
    >
      <Typography sx={{ fontSize: '25px' }}>Good Morning, John</Typography>
      <Typography sx={{ fontSize: '25px' }}>28 July 2023</Typography>
    </Stack>
  );
}
