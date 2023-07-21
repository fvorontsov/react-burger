import { TCountedIngredient } from "./ingredients";

export type TOrder = {
  _id: string;
  name: string;
  ingredients: Array<string>;
  status: string;
  number: number;
  createdAt: string;
  updatedAt: string;
};

export type TOrders = Array<TOrder>;

export type TCorrectOrder = Omit<TOrder, "ingredients"> & {
  ingredients: TCountedIngredient[];
};

export type TOrdersList = {
  orders: Array<TOrder>;
  total: number;
  totalToday: number;
};
