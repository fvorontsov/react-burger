import { createAppAsyncThunk, getErrorDescription } from "../../utils/utils";
import { createAction } from "@reduxjs/toolkit";
import { makeOrder } from "../../utils/api";
import { clearIngredients } from "./BurgerConstructorActions";
import { clearQuantity } from "./BurgerIngredientActions";

export type TPlaceOrderPayload = {
  ingredients: string[];
};
export const placeOrder = createAppAsyncThunk<string, TPlaceOrderPayload>(
  "order/makeOrder",
  async (ingredients, thunkApi) => {
    try {
      let result = await makeOrder(ingredients.ingredients);
      thunkApi.dispatch(openOrderDetailsModal());
      thunkApi.dispatch(clearIngredients());
      thunkApi.dispatch(clearQuantity());
      return result;
    } catch (error) {
      return thunkApi.rejectWithValue(
        getErrorDescription(error, "Не получилось создать заказ")
      );
    }
  }
);

export const clearOrder = createAction("order/clear");

export const openOrderDetailsModal = createAction("order/openModal");
export const closeOrderDetailsModal = createAction("order/closeModal");
