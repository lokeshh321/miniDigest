import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function TodayInHistory() {
  return (
    <Box sx={{ minWidth: 400, borderRadius: 5 }}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 5,
          backgroundColor: '#F7EEE7',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)', // subtle shadow
          border: '1px solid rgba(0, 0, 0, 0.25)',
        }}
      >
        <CardContent>
          <Typography
            sx={{
              fontSize: 22,
              marginBottom: 1,
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
            }}
            color="secondary"
            gutterBottom
          >
            Today in History
          </Typography>
          <Typography variant="h6" component="span" sx={{ marginBottom: 5 }}>
            The Sydney Opera House was opened on this day in 1973.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
