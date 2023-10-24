import { Button, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <Container disableGutters maxWidth={false} overflowX="hidden">
      <Box
        sx={{
          backgroundImage: 'url(assets/background.png)',
          backgroundPosition: 'center',
          margin: 'auto',
          width: '100%',
          height: '100vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <Stack
        paddingLeft={10}
        paddingTop={8}
        sx={{
          position: 'absolute',
          top: 0,
          left: '2%',
          zIndex: 1,
          width: '60%',
        }}
      >
        <Box
          sx={{
            alignItems: 'flex-end',
            height: '50px',
            objectFit: 'cover',
            paddingBottom: '130px',
          }}
        >
          <img src="assets/minidigest_logo.png" alt="logo" width={300} />
        </Box>

        <Typography variant="h1">
          Your Daily <br />
          Dose of News
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ fontSize: '25px' }}>
          Concise, Readable, Fast, and Personalised for you.
        </Typography>

        <Stack spacing={2} direction="row" paddingTop={2}>
          <Button
            component={Link}
            to="/signup"
            variant="contained"
            disableElevation
          >
            Sign Up
          </Button>
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            disableElevation
          >
            Login
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Landing;
