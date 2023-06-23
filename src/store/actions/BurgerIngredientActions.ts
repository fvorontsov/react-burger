import { createAppAsyncThunk, getErrorDescription } from "../../utils/utils";
import { TCountedIngredient } from "../../types";
import { createAction } from "@reduxjs/toolkit";
import { fetchIngredients } from "../../utils/api";

export const loadIngredients = createAppAsyncThunk<Array<TCountedIngredient>>(
  "users/fetchIngredients",
  async (_, thunkApi) => {
    try {
      return await fetchIngredients().then((r) => r);
    } catch (error) {
      return thunkApi.rejectWithValue(
        getErrorDescription(
          error,
          "Не получилось загрузить список ингредиентов"
        )
      );
    }
  }
);

export const clearQuantity = createAction("ingredients/clearQuantity");
export const decreaseQuantity = createAction<string>(
  "ingredients/decreaseQuantity"
);
export const increaseQuantity = createAction<string>(
  "ingredients/increaseQuantity"
);
export const selectBuns = createAction<string>("ingredients/selectBuns");
