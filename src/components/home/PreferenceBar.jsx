import { Button, Divider, Grid } from '@mui/material';
import { get, onValue, ref, update } from 'firebase/database';
import React, { useEffect, useMemo, useState } from 'react';

import { db } from '../../configs/firebase';

export default function PreferenceBar() {
  const [loaded, setLoaded] = useState(false);
  const [allButtonState, setAllStates] = useState(false);

  const [buttonStates, setButtonStates] = useState({
    Tech: false,
    Science: false,
    Sports: false,
    Business: false,
    Health: false,
    Entertainment: false,
  });

  const userID = '000'; // PLACEHOLDER

  useEffect(() => {
    const dbref = ref(db, `/users/${userID}`);
    return onValue(dbref, (snapshot) => {
      const info = snapshot.val();
      if (snapshot.exists()) {
        setAllStates(info.preferences.all);
        setButtonStates({
          Tech: info.preferences.tech,
          Science: info.preferences.science,
          Sports: info.preferences.sports,
          Business: info.preferences.business,
          Health: info.preferences.health,
          Entertainment: info.preferences.entertainment,
        });
        setLoaded(true);
      }
    });
  }, [loaded]);

  const handleButtonChange = () => {
    // sync preference changes with firebase
    const userRef = ref(db, `/users/${userID}`);

    get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        const updatePreference = {
          all: allButtonState,
          tech: buttonStates.Tech,
          science: buttonStates.Science,
          sports: buttonStates.Sports,
          business: buttonStates.Business,
          health: buttonStates.Health,
          entertainment: buttonStates.Entertainment,
        };

        update(userRef, {
          preferences: updatePreference,
        });
      }
    });
  };

  useMemo(() => {
    if (loaded) {
      handleButtonChange();
    }
  }, [buttonStates, allButtonState]);

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
      paddingBottom={5}
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
            marginRight: '1.5rem',
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
