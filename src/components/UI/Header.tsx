import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { createTheme, ThemeProvider } from '@mui/material';
import { useContext, useState } from 'react';
import Cart from './Cart/Cart';
import { MealsContext } from '../../store/MealsContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#752205',
    },
    secondary: {
      main: '#4d1601',
    },
    info: {
      main: '#b94516',
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
    },
  },
});

function Header() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const { meals } = useContext(MealsContext);

  let totalAmount = 0.0;

  if (meals.length > 0) {
    totalAmount = meals
      .map((x) => x.amount)
      .reduce((a, b) => {
        return a + b;
      });
  }

  const onClick = () => {
    setCartIsOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      {cartIsOpen ? <Cart onClick={onClick} /> : null}
      <ThemeProvider theme={theme}>
        <AppBar position='static'>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mx: 15,
              py: 1.5,
            }}
          >
            <Typography variant='h4'>React Meals</Typography>

            <Button
              onClick={onClick}
              variant='contained'
              color='secondary'
              sx={{
                height: '90%',
                borderRadius: 5,
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                px: 6,
                py: 2,
                gap: 1.5,
              }}
            >
              <ShoppingCartIcon />
              <Typography variant='button'>Your Cart</Typography>
              <Box
                sx={{
                  backgroundColor: theme.palette.info.main,
                  borderRadius: 5,
                  py: 0.5,
                  px: 2,
                  textAlign: 'center',
                }}
              >
                <Typography variant='button'>{totalAmount}</Typography>
              </Box>
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
}

export default Header;
