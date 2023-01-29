import { Fragment, useContext, useEffect, useState } from 'react';
import { Divider } from '@mui/material';
import { GetMeals } from '../../../services/MealsMock';
import { IMeal } from '../../../types/Meal';
import AvailableMealsItem from './AvailableMealsItem';
import Card from '../../UI/Card';
import Loading from '../../UI/Loading';
import { MealsContext } from '../../../store/MealsContext';

function AvailableMeals() {
  const [availableMeals, setAvailableMeals] = useState<IMeal[]>([]);

  useEffect(() => {
    GetMeals().then((res) => setAvailableMeals(res));
  }, []);

  const { addMeal } = useContext(MealsContext);

  const mealsElements = availableMeals.map((x: IMeal, index: number) => {
    if (index === availableMeals.length - 1) {
      return <AvailableMealsItem key={x.id} {...x} onNewMeal={addMeal} />;
    }
    return (
      <Fragment key={x.id}>
        <AvailableMealsItem {...x} onNewMeal={addMeal} />
        <Divider
          sx={{
            my: -3,
            border: '1px solid rgba(0, 0, 0, 0.4);',
          }}
        />
      </Fragment>
    );
  });

  return (
    <Card
      bgcolor='white'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        width: '90%',
      }}
    >
      {availableMeals.length === 0 ? <Loading /> : mealsElements}
    </Card>
  );
}

export default AvailableMeals;
