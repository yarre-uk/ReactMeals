import { Typography } from '@mui/material';
import Card from '../UI/Card';

function MealsPromo() {
  return (
    <Card
      bgcolor='primary.main'
      color='white'
      sx={{
        width: '70%',
      }}
    >
      <Typography variant='h4'>Delicious Food, Delivered To You</Typography>
      <Typography variant='h5'>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home. All our meals are cooked
        with high-quality ingredients, just-in-time and of course by experienced
        chefs!
      </Typography>
    </Card>
  );
}

export default MealsPromo;
