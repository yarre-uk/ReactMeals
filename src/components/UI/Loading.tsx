import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

function Loading() {
  const [text, setText] = useState<string>('Loading');

  useEffect(() => {
    const timer = setInterval(() => {
      setText((prevState) => {
        if (prevState.includes('...')) {
          return prevState.replace('...', '');
        }

        return `${prevState}.`;
      });
    }, 750);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        textAlign: 'left',
        pl: 1,
      }}
    >
      <Typography variant='h4'>{text}</Typography>
    </Box>
  );
}

export default Loading;
