import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { Button, Card, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
import React, { useContext } from 'react';

import { UserContext } from '../../utils/UserContext';
import { updateUserInfo } from '../../utils/UserManager';

export default function StyliseCard({ userID, userInfo }) {
  const { setRenderUpdate } = useContext(UserContext);
  let textInput = userInfo.stylise_prompt;

  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
        width: 100%;
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 12px;
        border-radius: 12px 12px 0 12px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${
          theme.palette.mode === 'dark' ? grey[700] : grey[200]
        };
        box-shadow: 0px 2px 2px ${
          theme.palette.mode === 'dark' ? grey[900] : grey[50]
        };
    
        &:hover {
          border-color: ${blue[400]};
        }
    
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${
            theme.palette.mode === 'dark' ? blue[500] : blue[200]
          };
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `
  );

  const updateStylise = () => {
    // change stylise prompt on firebase
    updateUserInfo(userID, 'stylise_prompt', textInput);
    setRenderUpdate(true);
  };

  return (
    <Stack>
      <Typography
        textAlign="center"
        sx={{ paddingTop: 5, paddingBottom: 2, fontSize: '20px' }}
      >
        Stylise your news!
      </Typography>
      <Card variant="outlined" sx={{ padding: 5, borderRadius: 4 }}>
        <Stack spacing={3} alignItems="center">
          <Textarea
            aria-label="stylise details"
            minRows={5}
            defaultValue={
              userInfo.stylise_prompt === '' ? '' : userInfo.stylise_prompt
            }
            placeholder="Input custom prompts to further personalise your daily news!"
            onChange={(event) => {
              textInput = event.target.value;
            }}
          />
          <Button
            color="secondary"
            variant="outlined"
            style={{ width: '50%' }}
            onClick={updateStylise}
          >
            Update
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
}
