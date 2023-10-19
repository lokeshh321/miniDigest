import { Button, Divider, Grid } from '@mui/material';
import React, { useState } from 'react';

export default function PreferenceBar() {
  const [allButtonState, setAllStates] = useState(false);

  const [buttonStates, setButtonStates] = useState({
    Tech: false,
    Science: false,
    Sports: false,
    Business: false,
    Health: false,
    Entertainment: false,
  });

  const toggleAll = () => {
    setAllStates(!allButtonState);

    // reset all other buttons
    if (!allButtonState) {
      setButtonStates((prevState) => ({
        ...prevState,
        Tech: false,
        Science: false,
        Sports: false,
        Business: false,
        Health: false,
        Entertainment: false,
      }));
    }

    // post changes to firebase here
  };

  const toggleButton = (buttonName) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));

    // reset all button
    if (allButtonState) {
      toggleAll();
    }

    // post changes to firebase here
  };

  return (
    <Grid
      container
      spacing={5}
      paddingTop={5}
      paddingBottom={5}
      justifyContent="center"
    >
      <Grid item>
        <Button
          key={allButtonState.uniqueId}
          onClick={() => toggleAll()}
          variant={allButtonState ? 'contained' : 'string'}
          disableRipple
          style={{
            textDecoration: 'none',
            color: 'black',
            backgroundColor: allButtonState
              ? 'rgb(229 231 235)'
              : 'transparent',
            textTransform: 'none',
            borderRadius: 8,
          }}
          sx={{
            fontSize: '20px',
          }}
        >
          All
        </Button>
      </Grid>
      <Grid item>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ display: 'inline' }}
          color="black"
          style={{
            paddingTop: '0.4rem',
            paddingBottom: '2rem',
            marginRight: '1.5rem',
            minHeight: 'inherit',
            color: 'red',
          }}
        />
      </Grid>
      {Object.keys(buttonStates).map((buttonName) => (
        <Grid item key={buttonName.valueOf()}>
          <Button
            key={buttonName.uniqueId}
            onClick={() => toggleButton(buttonName)}
            variant={buttonStates[buttonName] ? 'contained' : 'string'}
            disableRipple
            style={{
              textDecoration: 'none',
              color: 'black',
              backgroundColor: buttonStates[buttonName]
                ? 'rgb(229 231 235)'
                : 'transparent',
              textTransform: 'none',
              borderRadius: 8,
            }}
            sx={{
              fontSize: '20px',
            }}
          >
            {buttonName}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
