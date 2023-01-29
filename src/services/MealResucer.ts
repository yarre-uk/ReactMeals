import { CartMeals } from '../types/Meal';

export enum CartMealsActions {
  Add = 'Add',
  Remove = 'Remove',
  Update = 'Update',
}

type AddMealAction = {
  type: CartMealsActions.Add;
  value: {
    id: number;
    amount: number;
  };
};

type UpdateMealAction = {
  type: CartMealsActions.Update;
  value: {
    id: number;
    amount: number;
  };
};

type RemoveMealAction = {
  type: CartMealsActions.Remove;
  value: {
    id: number;
  };
};

type DispatchActions = AddMealAction | RemoveMealAction | UpdateMealAction;

function mealReducer(state: CartMeals, action: DispatchActions): CartMeals {
  switch (action.type) {
    case CartMealsActions.Add: {
      if (state.find((x) => x.id === action.value.id)) {
        return state.map((x) => {
          if (x.id !== action.value.id) {
            return x;
          }

          return { ...x, amount: x.amount + action.value.amount };
        });
      }
      return [...state, action.value];
    }
    case CartMealsActions.Update: {
      return state.map((x) => {
        if (x.id !== action.value.id) {
          return x;
        }

        return { ...x, amount: x.amount + action.value.amount };
      });
    }
    case CartMealsActions.Remove: {
      return state.filter((x) => x.id !== action.value.id);
    }
    default: {
      throw Error('Incorrect action type!');
    }
  }
}

export default mealReducer;
