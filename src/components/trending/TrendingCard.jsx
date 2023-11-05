import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Button } from 'react-bootstrap';

export default function TrendingCard({ article }) {
  return (
    <Card sx={{ marginY: 2, marginX: 4 }} variant="outlined">
      <Stack direction="row" paddingBottom={2}>
        <Box padding={4} alignSelf="center">
          <Stack>
            <img
              src={article.urlToImage}
              alt="filler"
              style={{
                width: '30vw',
                height: '25vw', // Set a fixed height to maintain the aspect ratio
                objectFit: 'cover', // Use 'cover' to fill the container
                borderRadius: 10,
                overflow: 'hidden',
              }}
            />

            <Stack
              spacing={2}
              direction="row"
              paddingTop={2}
              justifyContent="center"
            >
              <Button href={article.url}>Visit Page</Button>
              <Button
                style={{
                  backgroundColor: 'white',
                  color: '#0D6EFD',
                }}
                onClick={() => {
                  navigator.clipboard.writeText(article.url);
                  alert('Copied Link!');
                }}
              >
                Share
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Stack justifyContent="center" padding={4} paddingY={5}>
          <Typography
            variant="h5"
            fontWeight={700}
            paddingBottom={2}
            maxWidth="90%"
          >
            {article.title}
          </Typography>
          <Stack
            color="primary.darkGrey"
            direction="row"
            paddingBottom={2}
            spacing={2}
          >
            <Typography>{article.source.name}</Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: 'black' }}
            />
            <Typography>{article.author}</Typography>
          </Stack>

          <Typography>{article.content}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
