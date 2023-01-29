import { IMeal, Meal } from '../types/Meal';

const DATA = [
  new Meal(0, 'Sushi', 'Some delicious sushi for you!', 10.5),
  new Meal(1, 'Carbonara', 'Great pasta for your lady!', 23),
  new Meal(2, 'Meat Balls', 'Beautiful balls!', 18),
  new Meal(3, 'Pizza', 'Cheese circle with some peperoni!', 9),
];

export function GetMeals() {
  return new Promise<IMeal[]>((res) => {
    setTimeout(() => {
      res(DATA);
    }, 1500);
  });
}

export function GetMeal(id: number): Meal {
  const meal = DATA.find((x) => x.id === id);

  if (!meal) {
    throw new Error('Invalid id!');
  }

  return meal;
}
