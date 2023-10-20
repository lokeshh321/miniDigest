import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <Box
      sx={{
        backgroundImage: 'url("assets/landing_bg4.jpg")',
        backgroundPosition: 'left bottom',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: '300px 300px',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexWrap: 'nowrap',
      }}
    >
      {/* Style = {{
        backgroundImage:
      }} */}

      <Stack spacing={5} padding={10}>
        <Box
          sx={{ alignItems: 'flex-end', height: '50px', objectFit: 'cover' }}
        >
          <img src="assets/minidigest_logo.png" alt="logo" width={300} />
        </Box>
        <Typography variant="h1" gutterBottom>
          Digest Your Daily Dose of News
        </Typography>

        <Typography variant="h3" gutterBottom>
          Your daily news bites in just one minute.
        </Typography>

        <Stack spacing={2} direction="row">
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
      <Box padding={5} sx={{ justifyContent: 'flex-end', alignItems: 'right' }}>
        <img src="assets/landing_image.jpg" alt="old looking background" />
      </Box>
    </Box>
  );

  // return <div>Landing Page</div>;
}

export default Landing;
