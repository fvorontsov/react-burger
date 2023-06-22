import { createAction } from "@reduxjs/toolkit";
import {TCountedIngredient} from "../../types";

export const selectIngredient = createAction<TCountedIngredient>(
  "ingredientDetails/selectIngredient"
);
export const deselectIngredient = createAction("ingredientDetails/deselectIngredient");
export const openIngredientDetailsModal = createAction("ingredientDetails/openModal");
export const closeIngredientDetailsModal = createAction("ingredientDetails/closeModal");

