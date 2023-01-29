export type CartMeal = { id: number; amount: number };
export type CartMeals = CartMeal[];

export interface IMeal {
  id: number;
  title: string;
  description: string;
  price: number;
}

export class Meal implements IMeal {
  id: number;

  title: string;

  description: string;

  price: number;

  constructor(id: number, title: string, description: string, price: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
  }

  static getInitial() {
    return new Meal(0, '', '', 0);
  }
}
