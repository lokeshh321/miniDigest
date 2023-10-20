import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275, borderRadius: 2 }}>
      <Card variant="outlined" sx={{ borderRadius: 2 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14, marginBottom: 1 }}
            color="text.secondary"
            gutterBottom
          >
            Fact of the Day
          </Typography>
          <Typography variant="h5" component="div" sx={{ marginBottom: 1 }}>
            The real name of a hashtag is an octothorpe.
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            20/10/20
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
