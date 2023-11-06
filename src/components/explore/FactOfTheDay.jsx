import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 400, borderRadius: 5 }}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 5,
          backgroundColor: '#Ffffff',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(0, 0, 0, 0.25)',
        }}
      >
        <CardContent>
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
          <EmojiObjectsOutlinedIcon
            sx={{ marginRight: 1, fontSize: '1.8rem' }}
          />
          <Typography
            variant="subtitle2"
            component="span"
            sx={{ marginBottom: 5 }}
          >
            The real name of a hashtag is an octothorpe.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
