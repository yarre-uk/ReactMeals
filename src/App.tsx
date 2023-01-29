import { Container, createTheme, ThemeProvider } from '@mui/material';
import Header from './components/UI/Header';
import Meals from './components/Meals/Meals';
import { MealsContextProvider } from './store/MealsContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f3f3f',
    },
  },
});

function App() {
  return (
    <MealsContextProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Container
          sx={{
            height: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 10,
          }}
        >
          <Meals />
        </Container>
      </ThemeProvider>
    </MealsContextProvider>
  );
}

export default App;
