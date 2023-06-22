import { IngredientType } from "../../utils/constants";
import { createSlice } from "@reduxjs/toolkit";
import {
  clearQuantity,
  decreaseQuantity,
  increaseQuantity,
  loadIngredients,
  selectBuns,
} from "../actions/BurgerIngredientActions";
import { TCountedIngredient } from "../../types";

export interface IBurgerIngredientsState {
  ingredients: TCountedIngredient[];
  loading: boolean;
  error: string;
}

const initialState: IBurgerIngredientsState = {
  ingredients: [],
  loading: false,
  error: "",
};

export const burgerIngredientsSlice = createSlice({
  name: "burgerIngredients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadIngredients.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(loadIngredients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unknown error";
      })
      .addCase(clearQuantity, (state, action) => {
        state.ingredients = state.ingredients.map((ingredient) => {
          return { ...ingredient, quantity: 0 };
        });
      })
      .addCase(decreaseQuantity, (state, action) => {
        state.ingredients = state.ingredients.map((ingredient) => {
          return ingredient._id === action.payload
            ? {
                ...ingredient,
                quantity: ingredient.quantity - 1,
              }
            : ingredient;
        });
      })
      .addCase(increaseQuantity, (state, action) => {
        state.ingredients = state.ingredients.map((ingredient) => {
          return ingredient._id === action.payload
            ? {
                ...ingredient,
                quantity: ingredient.quantity ? ingredient.quantity + 1 : 1,
              }
            : ingredient;
        });
      })
      .addCase(selectBuns, (state, action) => {
        state.ingredients = state.ingredients.map((ingredient) => {
          if (ingredient.type === IngredientType.BUN) {
            return {
              ...ingredient,
              quantity: ingredient._id === action.payload ? 2 : 0,
            };
          } else {
            return ingredient;
          }
        });
      });
  },
});

export default burgerIngredientsSlice.reducer;
