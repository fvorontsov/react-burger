import { TUser } from "../types/user";
import { TCountedIngredient } from "../types";
import { TOrder } from "../types/order";

export type TResponse = {
  success: boolean;
  message?: string;
};

export type TUserResponse = TResponse & {
  user: TUser;
};

export type TTokensResponse = TUserResponse & {
  accessToken: string;
  refreshToken: string;
};

export type TIngredientsResponse = TResponse & {
  data: Array<TCountedIngredient>;
};

export type TOrdersResponse = TResponse & {
  orders: Array<TOrder>;
};

export interface IOrder {
  number: string;
}

export type TMakeOrderResponse = TResponse & {
  name: string;
  order: IOrder;
};
