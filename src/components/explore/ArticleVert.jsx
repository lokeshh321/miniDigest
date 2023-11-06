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

function cleanContent(inputString) {
  const regex = new RegExp('\\[\\+\\d+ chars\\]', 'g');
  return inputString.replace(regex, '');
}

function NewsCard({ article }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <MuiLink
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        color="inherit"
      >
        <Card
          sx={{
            maxWidth: '100%',
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
              image={
                article.urlToImage !== ''
                  ? article.urlToImage
                  : 'https://picsum.photos/805/250'
              }
              alt="lorem picsum"
              style={{
                width: '100%',
                height: '20vw', // Set a fixed height to maintain the aspect ratio
                objectFit: 'cover', // Use 'cover' to fill the container
              }}
            />
            <CardContent style={{ padding: '16px' }}>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
                style={{ fontWeight: 'bold' }}
              >
                {article.title}
              </Typography>
              <CardDetails
                author={article.author}
                source={article.source.name}
                date={article.publishedAt}
              />
              <Typography variant="body2" color="text.secondary">
                {cleanContent(article.content)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </MuiLink>
    </div>
  );
}

export default NewsCard;
