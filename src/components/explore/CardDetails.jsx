import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';

function formatDate(inputDate) {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const date = new Date(inputDate);
  return date.toLocaleDateString('en-US', options);
}

function CardDetails({ author, source, date }) {
  return (
    <Stack direction="row" marginBottom={1} justifyContent="space-between">
      <Stack direction="row">
        <Typography variant="caption" color="primary.darkGrey">
          {source}
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ backgroundColor: 'primary.darkGrey', marginX: 1 }}
        />
        <Typography variant="caption" color="primary.darkGrey">
          {author}
        </Typography>
      </Stack>
      <Typography variant="caption" color="primary.darkGrey">
        {formatDate(date)}
      </Typography>
    </Stack>
  );
}

export default CardDetails;
