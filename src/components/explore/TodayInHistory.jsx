import EventNoteIcon from '@mui/icons-material/EventNote';
import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton, Skeleton, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

import { getTodayInHistory } from '../../utils/LLMQuerier';
import {
  cacheTodayHistory,
  getCachedTodayHistory,
} from '../../utils/LocalStorageManager';

export default function TodayInHistory() {
  const [todayInHistory, setTodayInHistory] = useState('');
  useEffect(() => {
    async function fetchTodayInHistory() {
      try {
        const result = await getTodayInHistory();
        setTodayInHistory(result);
        cacheTodayHistory(result);
      } catch (error) {
        console.error('Error fetching today in history:', error);
      }
    }

    if (todayInHistory === '') {
      if (getCachedTodayHistory() !== '') {
        setTodayInHistory(getCachedTodayHistory());
      } else {
        fetchTodayInHistory();
      }
    }
  }, [todayInHistory]);

  function handleRefresh() {
    setTodayInHistory('');
    cacheTodayHistory('');
  }

  return (
    <Box sx={{ minWidth: 400, borderRadius: 5 }}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 2,
          backgroundColor: '#Ffffff',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // subtle shadow
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
              Today in History
            </Typography>
            <IconButton onClick={handleRefresh}>
              <RefreshIcon
                sx={{ fontSize: '1.8rem', color: 'primary.darkGrey' }}
              />
            </IconButton>
          </Stack>

          {todayInHistory !== '' ? (
            <div>
              <EventNoteIcon sx={{ marginRight: 1, fontSize: '1.8rem' }} />
              <Typography
                variant="subtitle2"
                component="span"
                sx={{ marginBottom: 5 }}
              >
                {todayInHistory}
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
