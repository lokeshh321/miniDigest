import Typography from '@mui/material/Typography';
import React from 'react';

import Carousel from './Carousel';

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center horizontally
  justifyContent: 'center', // Center vertically
  height: '2vh', // Adjusted for better centering
};

function Trending() {
  return (
    <main>
      <Typography variant="h5" align="left" padding="5px" marginLeft="10px">
        Good Morning, John
      </Typography>
      <div style={centerStyle}>
        <Typography variant="h6">
          Here are the top 10 Trending Articles today!
        </Typography>
      </div>
      <Carousel />
    </main>
  );
}

export default Trending;
