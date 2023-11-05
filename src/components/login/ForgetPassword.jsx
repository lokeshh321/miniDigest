import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../configs/firebase';

export default function ForgetPassword() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Password reset email sent!');
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

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
          width: '40%',
        }}
      >
        <Box
          sx={{
            alignItems: 'flex-end',
            height: '50px',
            objectFit: 'cover',
            paddingBottom: '170px',
          }}
        >
          <img src="assets/minidigest_logo.png" alt="logo" width={300} />
        </Box>
        <Typography width="60vw" variant="h5">
          Forgot password? Enter your email address below.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
