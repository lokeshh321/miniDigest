import { Box, Typography } from '@mui/material';
import React from 'react';

function CardDetails({ author, source, date }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ marginRight: 0.5 }}
      >
        {source}
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ mx: 0.5 }}>
        |
      </Typography>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ marginLeft: 0.5, marginRight: 0.5 }}
      >
        {author}
      </Typography>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ marginLeft: 46 }}
      >
        {date}
      </Typography>
    </Box>
  );
}

export default CardDetails;
