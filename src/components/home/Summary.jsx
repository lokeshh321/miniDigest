import { Card, Skeleton, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';

import streamSummaryResponse from '../../utils/LLMQuerier';
import { getCachedSummary } from '../../utils/LocalStorageManager';
import { UserContext } from '../../utils/UserContext';

export default function SummarySection({ userInfo }) {
  const { responseMsg, setResponseMsg, requireRender, setRenderUpdate } =
    useContext(UserContext);

  const [controller, setController] = useState(new AbortController());
  const [rendered, setRender] = useState(false);

  useEffect(() => {
    if (!rendered || requireRender) {
      // caches summary output into browser local storage to prevent unnecessary reloading
      const cache = getCachedSummary();
      if (requireRender || !cache) {
        if (requireRender) {
          const newController = new AbortController(); // stop old api call and start new call
          controller.abort();
          setController(newController);
          streamSummaryResponse(userInfo, setResponseMsg, newController);
        } else {
          streamSummaryResponse(userInfo, setResponseMsg, controller); // stream on first load
        }
      } else {
        setResponseMsg(cache); // load cached summary
      }
      setRender(true);
      setRenderUpdate(false);
    }
  }, [rendered, controller, userInfo]);

  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: 4, padding: 5, flexBasis: '75%' }}
    >
      {responseMsg !== '' ? (
        <Typography sx={{ fontSize: '20px', lineHeight: 2.2 }}>
          {responseMsg}
        </Typography>
      ) : (
        <Stack>
          <Skeleton height="50px" animation="wave" />
          <Skeleton height="50px" animation="wave" />
          <Skeleton height="50px" animation="wave" />
          <Skeleton height="50px" animation="wave" />
        </Stack>
      )}
    </Card>
  );
}

// SummarySection.propTypes = {
//   preferences: PropTypes.shape({
//     all: PropTypes.bool,
//     tech: PropTypes.bool,
//     science: PropTypes.bool,
//     sports: PropTypes.bool,
//     business: PropTypes.bool,
//     health: PropTypes.bool,
//     entertainment: PropTypes.bool,
//   }).isRequired,
// };
