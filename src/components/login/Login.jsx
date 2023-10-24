import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { auth } from '../../configs/firebase';

function Login() {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    signInWithEmailAndPassword(auth, data.get('email'), data.get('password'))
      .then((userCredential) => {
        const { user } = userCredential;
        navigate('/user/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert('Unable to Authenticate! Check your details!');
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
          Login to Your Account. Your Digest Awaits!
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {/* handle forget password here */}
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/signup" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}

export default Login;
