import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

function Landing() {
  return (
    <Stack spacing={5} direction="row">
      <Stack spacing={2}>
        <Typography variant="h1" gutterBottom>
          Digest Your Daily Dose of News
        </Typography>

        <Typography variant="h2" gutterBottom>
          BlahBlahBlah
        </Typography>

        <Stack spacing={2} direction="row">
          <Button variant="contained" disableElevation>
            Sign Up!
          </Button>
          <Button variant="outlined" disableElevation>
            Login
          </Button>
        </Stack>
      </Stack>

      <img src="https://i.pinimg.com/564x/23/cd/45/23cd4530a331aab64278b4bc9c24b555.jpg" />
    </Stack>
  );

  // return <div>Landing Page</div>;
}

export default Landing;
