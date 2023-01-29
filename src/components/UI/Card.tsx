import { ReactNode } from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import * as React from 'react';

interface Props {
  children: ReactNode | React.ReactNode;
  sx?: SxProps<Theme> | undefined;
  bgcolor?: string;
  color?: string;
}

function Card({ bgcolor, color, sx, children }: Props) {
  return (
    <Box
      bgcolor={bgcolor}
      sx={{
        p: 2,
        mt: 10,
        gap: 2,
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        color,
        borderRadius: 3,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export default Card;
