import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

export default function TrendingCard() {
  return (
    <Container width="xl">
      <Card sx={{ marginY: 2 }}>
        <Stack direction="row" paddingBottom={2}>
          <Box padding={4} alignSelf="center">
            <img
              src="https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=700&h=500&q=60"
              alt="filler"
              style={{
                width: '30vw',
                borderRadius: 20,
                overflow: 'hidden',
              }}
            />
          </Box>
          <Stack justifyContent="center" padding={4} paddingY={5}>
            <Typography
              variant="h5"
              fontWeight={700}
              paddingBottom={2}
              maxWidth="90%"
            >
              Why Egypt remains reluctant to open Rafah crossing to Gaza
            </Typography>
            <Stack
              color="primary.lightGrey"
              direction="row"
              paddingBottom={2}
              spacing={2}
            >
              <Typography>BBC News</Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ backgroundColor: 'black' }}
              />
              <Typography>Sebastian Usher</Typography>
            </Stack>

            <Typography>
              Egypt has long played a role as a mediator in the conflict not
              just between Israel and the Palestinians, but also between the
              main Palestinian factions themselves. It was the first Arab state
              to make peace with Israel back in 1978 - after fighting several
              wars with the Jewish state. Now, the focus is on Egypt's control
              of one of the two land routes out of the Gaza Strip - the Rafah
              crossing. Thousands of Palestinians are waiting on..
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </Container>
  );
}
