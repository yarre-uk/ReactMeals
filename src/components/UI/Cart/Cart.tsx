import { Box, Button, Divider, Typography } from '@mui/material';
import { Fragment, useContext } from 'react';
import { createPortal } from 'react-dom';
import Card from '../Card';
import { MealsContext } from '../../../store/MealsContext';
import CartItem from './CartItem';
import { GetMeal } from '../../../services/MealsMock';

type CartElementsProps = {
  onClick?: () => void;
};

function Cart({ onClick }: CartElementsProps) {
  const layout = document.getElementById('layouts') as HTMLElement;
  const background = document.getElementById('background') as HTMLElement;

  return (
    <>
      {createPortal(<Background onClick={onClick} />, background)}
      {createPortal(<Layout onClick={onClick} />, layout)}
    </>
  );
}

function Background({ onClick }: CartElementsProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
      }}
    />
  );
}

function Layout({ onClick }: CartElementsProps) {
  const { meals, updateMeal, deleteMeal } = useContext(MealsContext);

  const handleOnIncrease = (id: number) => {
    updateMeal({ id, amount: 1 });
  };

  const handleOnDecrease = (id: number) => {
    const meal = meals.find((x) => x.id === id);

    if (!meal) {
      throw new Error('Something wrong!');
    }

    if (meal.amount <= 1) {
      deleteMeal(id);
      return;
    }

    updateMeal({ id, amount: -1 });
  };

  const handleOnDelete = (id: number) => {
    deleteMeal(id);
  };

  let totalPrice = 0.0;

  if (meals.length > 0) {
    totalPrice = meals
      .map((x) => GetMeal(x.id).price * x.amount)
      .reduce((a, b) => {
        return a + b;
      });
  }

  const mealsArray = meals.map((x) => (
    <Fragment key={x.id}>
      <CartItem
        {...x}
        {...GetMeal(x.id)}
        onIncrease={handleOnIncrease}
        onDecrease={handleOnDecrease}
        onDelete={handleOnDelete}
      />
      <Divider
        sx={{
          mx: 2,
          my: 2,
          border: '1px solid rgba(0, 0, 0, 0.4);',
        }}
      />
    </Fragment>
  ));

  return (
    <Card
      sx={{
        position: 'absolute',
        width: '50rem',
        height: 'max-content',
        top: 75,
        left: 'calc(50% - 25rem)',
        p: 2,
        zIndex: 10,
        backgroundColor: 'white',
      }}
    >
      <Box
        sx={{
          flex: 1,
        }}
      >
        {mealsArray}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant='h5'
          width='max-content'
          sx={{
            pl: 2,
            fontWeight: '700',
            textAlign: 'left',
          }}
        >
          Total price
        </Typography>
        <Typography
          variant='h5'
          width='max-content'
          sx={{
            pl: 2,
            m: 0,
            fontWeight: '700',
            textAlign: 'right',
          }}
        >
          {totalPrice}$
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 2,
        }}
      >
        <Button
          onClick={onClick}
          sx={{
            py: 1,
            px: 5,
            borderRadius: 5,
          }}
          variant='outlined'
        >
          Close
        </Button>
        <Button
          onClick={onClick}
          variant='contained'
          sx={{
            py: 1,
            px: 5,
            borderRadius: 5,
          }}
        >
          Order
        </Button>
      </Box>
    </Card>
  );
}

export default Cart;
