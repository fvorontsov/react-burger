import { createSlice } from "@reduxjs/toolkit";
import { TConstructorIngredient } from "../../types";
import { v4 as uuid } from "uuid";
import {
  addIngredient,
  clearIngredients,
  moveIngredient,
  removeIngredient,
  selectBun,
} from "../actions/BurgerConstructorActions";

export interface IBurgerConstructorState {
  ingredients: TConstructorIngredient[];
  bun: TConstructorIngredient | null;
}

const initialState: IBurgerConstructorState = {
  ingredients: [],
  bun: null,
};

export const burgerConstructorSlice = createSlice({
  name: "burgerConstructor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(selectBun, (state, action) => {
        state.bun = action.payload;
      })
      .addCase(removeIngredient, (state, action) => {
        state.ingredients = state.ingredients.filter(
          (ingredient) => ingredient.uuid !== action.payload
        );
      })
      .addCase(addIngredient, (state, action) => {
        state.ingredients = [
          ...state.ingredients,
          { ...action.payload, uuid: uuid() },
        ];
      })
      .addCase(moveIngredient, (state, action) => {
        const ingredients = [...state.ingredients];
        [
          ingredients[action.payload.dragIndex],
          ingredients[action.payload.hoverIndex],
        ] = [
          ingredients[action.payload.hoverIndex],
          ingredients[action.payload.dragIndex],
        ];

        state.ingredients = ingredients;
      })
      .addCase(clearIngredients, (state, action) => {
        state.ingredients = [];
        state.bun = null;
      });
  },
});

export default burgerConstructorSlice.reducer;
