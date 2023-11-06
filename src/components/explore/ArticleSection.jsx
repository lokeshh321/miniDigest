import { Divider, Stack, Typography } from '@mui/material';

import NewsCard from './ArticleVert';

function SectionTitle({ title }) {
  return (
    <Stack>
      <Typography variant="h4" fontWeight={600}>
        {title}
      </Typography>
      <Divider
        flexItem
        sx={{
          backgroundColor: '#000000',
          marginBottom: 0.8,
          marginTop: 1.5,
          marginRight: 20,
          padding: 0.1,
        }}
      />
      <Divider
        flexItem
        sx={{
          backgroundColor: 'black',
          marginBottom: 3,
          padding: 0.1,
        }}
      />
    </Stack>
  );
}

export default function ArticleSection({ title, articles }) {
  return (
    <Stack>
      <SectionTitle title={title} />
      <Stack
        spacing={2}
        divider={
          <Divider
            flexItem
            sx={{
              backgroundColor: 'primary.lightGrey',
              marginBottom: 1,
            }}
          />
        }
      >
        {articles.map((article) => (
          <NewsCard article={article} />
        ))}
      </Stack>
    </Stack>
  );
}
