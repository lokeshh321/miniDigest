import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function TodayInHistory() {
  return (
    <Box sx={{ minWidth: 275, borderRadius: 2, marginTop: 4 }}>
      <Card variant="outlined" sx={{ borderRadius: 2 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14, marginBottom: 1 }}
            color="text.secondary"
            gutterBottom
          >
            Today in History!
          </Typography>
          <Typography variant="h5" component="div" sx={{ marginBottom: 1 }} />
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            The Sydney Opera House was officially opened on this day in 1973.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
