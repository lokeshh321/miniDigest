import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { auth } from '../../configs/firebase';
import { createNewUserProfile } from '../../utils/UserManager';

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    createUserWithEmailAndPassword(
      auth,
      data.get('email'),
      data.get('password')
    )
      .then((userCredential) => {
        const { user } = userCredential;
        createNewUserProfile(user, data.get('userName'));
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
            paddingBottom: '130px',
          }}
        >
          <img src="assets/minidigest_logo.png" alt="logo" width={300} />
        </Box>

        <Stack paddingLeft={0}>
          <Stack direction="row" spacing={5}>
            <Typography variant="h5">
              Create an Account. Start Your Digest!
            </Typography>
          </Stack>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="reemail"
                  label="Re-enter Email Address"
                  name="reemail"
                  autoComplete="reemail"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}

export default SignUp;
