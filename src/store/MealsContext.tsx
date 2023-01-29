import React, { ReactNode, useReducer } from 'react';
import { CartMeal, CartMeals } from '../types/Meal';
import mealReducer, { CartMealsActions } from '../services/MealResucer';

export const MealsContext = React.createContext<{
  meals: CartMeals;
  addMeal: (meal: CartMeal) => void;
  updateMeal: (meal: CartMeal) => void;
  deleteMeal: (id: number) => void;
}>({
  meals: [],
  addMeal: () => {},
  updateMeal: () => {},
  deleteMeal: () => {},
});

export function MealsContextProvider({ children }: { children: ReactNode }) {
  const [cartMeals, dispatchMeals] = useReducer(mealReducer, []);

  const addMeal = (meal: CartMeal) => {
    if (meal.amount <= 0) {
      return;
    }
    dispatchMeals({ type: CartMealsActions.Add, value: meal });
  };

  const updateMeal = (meal: CartMeal) => {
    dispatchMeals({ type: CartMealsActions.Update, value: meal });
  };

  const deleteMeal = (id: number) => {
    dispatchMeals({ type: CartMealsActions.Remove, value: { id } });
  };

  return (
    <MealsContext.Provider
      /* eslint-disable-next-line react/jsx-no-constructed-context-values */
      value={{
        meals: cartMeals,
        addMeal,
        updateMeal,
        deleteMeal,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
}
