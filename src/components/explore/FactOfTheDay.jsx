import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton, Skeleton, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

import { getFactOfTheDay } from '../../utils/LLMQuerier';
import { cacheFOTD, getCachedFOTD } from '../../utils/LocalStorageManager';

export default function OutlinedCard() {
  const [factOfTheDay, setFactOfTheDay] = useState('');

  useEffect(() => {
    async function fetchFactOfTheDay() {
      try {
        const result = await getFactOfTheDay();
        setFactOfTheDay(result);
        cacheFOTD(result);
      } catch (error) {
        console.error('Error fetching fact of the day:', error);
      }
    }

    if (factOfTheDay === '') {
      if (getCachedFOTD() !== '') {
        setFactOfTheDay(getCachedFOTD());
      } else {
        fetchFactOfTheDay();
      }
    }
  }, [factOfTheDay]);

  function handleRefresh() {
    setFactOfTheDay('');
    cacheFOTD('');
  }

  return (
    <Box sx={{ minWidth: 400 }}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 2,
          backgroundColor: '#Ffffff',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(0, 0, 0, 0.25)',
        }}
      >
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Typography
              sx={{
                fontSize: 20,
                marginBottom: 1,
                display: 'flex',
                alignItems: 'center',
                fontWeight: 'bold',
              }}
              color="#000000"
              gutterBottom
            >
              Fact of the Day
            </Typography>
            <IconButton onClick={handleRefresh}>
              <RefreshIcon
                sx={{ fontSize: '1.8rem', color: 'primary.darkGrey' }}
              />
            </IconButton>
          </Stack>

          {factOfTheDay !== '' ? (
            <div>
              <EmojiObjectsOutlinedIcon
                sx={{ marginRight: 1, fontSize: '1.8rem' }}
              />
              <Typography
                variant="subtitle2"
                component="span"
                sx={{ marginBottom: 5 }}
              >
                {factOfTheDay}
              </Typography>
            </div>
          ) : (
            <Stack>
              <Skeleton height="40px" animation="wave" />
              <Skeleton height="40px" animation="wave" />
            </Stack>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
