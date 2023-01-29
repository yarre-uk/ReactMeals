import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CartMeal, IMeal } from '../../../types/Meal';

interface Props extends IMeal {
  onNewMeal: (value: CartMeal) => void;
}

function AvailableMealsItem({
  id,
  title,
  description,
  price,
  onNewMeal,
}: Props) {
  const [amount, setAmount] = useState<number>(0);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.currentTarget.value;

    if (value < 0) {
      return;
    }

    setAmount(+e.currentTarget.value);
  };

  return (
    <Box
      sx={{
        textAlign: 'start',
        display: 'flex',
        flexDirection: 'row',
        p: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          flex: 1,
        }}
      >
        <Typography
          variant='h5'
          sx={{
            fontWeight: '600',
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontStyle: 'italic', color: 'gray' }} variant='body1'>
          {description}
        </Typography>
        <Typography variant='h5' sx={{ fontWeight: '600', color: '#F98948' }}>
          {price}$
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          gap: 1,
        }}
      >
        <TextField
          id='filled-basic'
          label='Amount'
          variant='filled'
          type='number'
          value={amount}
          onChange={handleOnChange}
        />
        <Button
          variant='contained'
          onClick={() => {
            setAmount(0);
            onNewMeal({ id, amount });
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
}

export default AvailableMealsItem;
