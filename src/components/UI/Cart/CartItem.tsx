import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

type Props = {
  id: number;
  title: string;
  price: number;
  amount: number;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onDelete: (id: number) => void;
};

function CartItem({
  id,
  title,
  price,
  amount,
  onIncrease,
  onDecrease,
  onDelete,
}: Props) {
  return (
    <Box
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'left',
        pl: 2,
      }}
    >
      <Box sx={{ flex: 0.9 }}>
        <Typography
          variant='h5'
          sx={{
            fontWeight: '600',
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontStyle: 'italic', color: 'gray' }} variant='body1'>
          {amount}
        </Typography>
        <Typography variant='h5' sx={{ fontWeight: '600', color: '#F98948' }}>
          {price}$
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Button variant='outlined' onClick={() => onDecrease(id)}>
          -
        </Button>
        <Button variant='outlined' onClick={() => onIncrease(id)}>
          +
        </Button>
        <Button variant='outlined' onClick={() => onDelete(id)}>
          <DeleteOutlinedIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default CartItem;
