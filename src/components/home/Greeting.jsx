import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function Greeting({ name }) {
  function formatDate() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const today = new Date();
    const day = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate;
  }

  const todayFormatted = formatDate();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ paddingBottom: 3 }}
    >
      <Typography sx={{ fontSize: '25px' }}>Good Morning, {name}</Typography>
      <Typography sx={{ fontSize: '25px' }}>{todayFormatted}</Typography>
    </Stack>
  );
}
