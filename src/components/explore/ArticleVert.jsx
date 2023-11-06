import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link as MuiLink,
  Typography,
} from '@mui/material';
import React from 'react';

import CardDetails from './CardDetails';

function NewsCard() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card
        sx={{
          pt: 3,
          pl: 3,
          pr: 3,
          backgroundColor: 'transparent',
          borderTop: '1px solid #414a4c',
          borderBottom: '1px solid #414a4c',
          maxWidth: 'calc(100% -16px)',
          boxSizing: 'border-box',
        }}
      >
        <MuiLink
          href="https://www.channelnewsasia.com/business/china-us-sanctions-russia-relations-global-supply-chain-3860201"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          color="inherit"
        >
          <Card
            sx={{
              maxWidth: '100%',
              mb: 3,
              transition: 'transform 0.2s',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
            elevation={1}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="auto"
                image="https://picsum.photos/805/250"
                alt="lorem picsum"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <CardContent style={{ padding: '16px' }}>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                  style={{ fontWeight: 'bold' }}
                >
                  China weighs options to blunt US sanctions in Taiwan conflict
                </Typography>
                <CardDetails
                  author="Belinda Tang"
                  source="Channel News Asia"
                  date="6 Nov 2023"
                />
                <Typography variant="body2" color="text.secondary">
                  In a war with the US over Taiwan, China would need to create a
                  global network of companies under US sanctions, seize American
                  assets within its border, and issue gold-denominated bonds,
                  according to Chinese government-affiliated researchers
                  studying...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </MuiLink>
      </Card>
    </div>
  );
}

export default NewsCard;
