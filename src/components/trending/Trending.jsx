import { Container } from '@mui/material';
import React from 'react';

import Greeting from '../shared/Greeting';
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
      <Container width="xm">
        <Greeting />
        <Carousel />
      </Container>
    </main>
  );
}

export default Trending;
