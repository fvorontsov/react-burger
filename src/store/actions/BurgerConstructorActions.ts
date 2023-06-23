import { createAction } from "@reduxjs/toolkit";
import { TConstructorIngredient } from "../../types";

export const addIngredient = createAction<TConstructorIngredient>(
  "burgerConstructor/clearQuantity"
);
export const clearIngredients = createAction(
  "burgerConstructor/clearIngredients"
);

export type TMoveIngredientPayload = {
  dragIndex: number;
  hoverIndex: number;
};
export const moveIngredient = createAction<TMoveIngredientPayload>(
  "burgerConstructor/moveIngredient"
);
export const removeIngredient = createAction<string>(
  "burgerConstructor/removeIngredient"
);
export const selectBun = createAction<TConstructorIngredient>(
  "burgerConstructor/selectBun"
);
