import { createSlice } from "@reduxjs/toolkit";
import {
  closeIngredientDetailsModal,
  deselectIngredient,
  openIngredientDetailsModal,
  selectIngredient,
} from "../actions/IngredientDetailsActions";
import { TCountedIngredient } from "../../types";

export interface IIngredientDetailsSlice {
  selectedIngredient?: TCountedIngredient;
  modalIsOpen: boolean;
}

const initialState: IIngredientDetailsSlice = {
  selectedIngredient: undefined,
  modalIsOpen: false,
};

export const ingredientDetailsSlice = createSlice({
  name: "ingredientDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(selectIngredient, (state, action) => {
        state.selectedIngredient = action.payload;
      })

      .addCase(deselectIngredient, (state, action) => {
        state.selectedIngredient = initialState.selectedIngredient;
      })
      .addCase(openIngredientDetailsModal, (state, action) => {
        state.modalIsOpen = true;
      })
      .addCase(closeIngredientDetailsModal, (state, action) => {
        state.modalIsOpen = false;
      });
  },
});

export default ingredientDetailsSlice.reducer;
