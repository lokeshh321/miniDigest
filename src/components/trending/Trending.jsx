import Typography from '@mui/material/Typography';
import React from 'react';

import STMS from './STMS';

function Trending() {
  return (
    <main>
      <Typography variant="h6" align="left">
        Good Morning, John
      </Typography>
      <Typography variant="h10" align="left">
        Here are the top 10 Trending Articles today:
      </Typography>
      <STMS />
    </main>
  );
}

export default Trending;
