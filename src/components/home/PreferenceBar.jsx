import { Button, Divider, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useMemo, useState } from 'react';

import { UserContext } from '../../utils/UserContext';
import { syncUserPreferences } from '../../utils/UserManager';

export default function PreferenceBar({ preferences }) {
  const { userID, setRenderUpdate } = useContext(UserContext);
  const [allButtonState, setAllStates] = useState(preferences.all);

  const [buttonStates, setButtonStates] = useState({
    Tech: preferences.tech,
    Science: preferences.science,
    Sports: preferences.sports,
    Business: preferences.business,
    Health: preferences.health,
    Entertainment: preferences.entertainment,
  });

  const toggleAll = () => {
    setAllStates(!allButtonState);

    // reset all other buttons
    if (!allButtonState) {
      setButtonStates(() => ({
        Tech: false,
        Science: false,
        Sports: false,
        Business: false,
        Health: false,
        Entertainment: false,
      }));
    }
  };

  useEffect(() => {
    // if user deselects all categories, automatically select "all"
    if (Object.values(buttonStates).every((value) => value === false)) {
      setAllStates(true);
    }

    if (Object.values(buttonStates).every((value) => value === true)) {
      toggleAll();
    }
  }, [buttonStates, allButtonState]);

  const handleButtonChange = () => {
    // post changes to firebase
    syncUserPreferences(userID, buttonStates, allButtonState);
  };

  useMemo(() => {
    handleButtonChange();
    setRenderUpdate(true);
  }, [buttonStates, allButtonState]);

  const toggleButton = (buttonName) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));

    // reset all button
    if (allButtonState) {
      toggleAll();
    }
  };

  return (
    <Grid
      container
      spacing={5}
      paddingTop={5}
      paddingBottom={3}
      justifyContent="center"
    >
      <Grid item>
        <Button
          key={allButtonState}
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
            marginLeft: '1.2rem',
            minHeight: 'inherit',
            color: 'red',
          }}
        />
      </Grid>
      {Object.keys(buttonStates).map((buttonName) => (
        <Grid item key={buttonName.valueOf()}>
          <Button
            key={buttonName}
            onClick={() => {
              toggleButton(buttonName);
            }}
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

PreferenceBar.propTypes = {
  preferences: PropTypes.shape({
    all: PropTypes.bool,
    tech: PropTypes.bool,
    science: PropTypes.bool,
    sports: PropTypes.bool,
    business: PropTypes.bool,
    health: PropTypes.bool,
    entertainment: PropTypes.bool,
  }).isRequired,
};
