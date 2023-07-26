import { ingredientDetailsSlice } from "./IngredientDetailsSlice";
import { TCountedIngredient } from "../../types";
import {
  closeIngredientDetailsModal,
  deselectIngredient, openIngredientDetailsModal,
  selectIngredient,
} from "../actions/IngredientDetailsActions";

describe("Ingredient Details reducers", () => {
  const reducer = ingredientDetailsSlice.reducer;
  it("has initial state", () => {
    expect(reducer(undefined, { type: "test" })).toEqual({
      selectedIngredient: undefined,
      modalIsOpen: false,
    });
  });

  it("should select ingredient", function () {
    const ingredient: TCountedIngredient = {
      quantity: 10,
      _id: "1",
      calories: 0,
      carbohydrates: 0,
      fat: 0,
      image: "",
      image_large: "",
      image_mobile: "",
      name: "",
      price: 0,
      proteins: 0,
      type: "bun",
    };

    expect(reducer(undefined, selectIngredient(ingredient))).toEqual({
      selectedIngredient: ingredient,
      modalIsOpen: false,
    });
  });

  it("should deselect ingredients", function () {
    const ingredient: TCountedIngredient = {
      quantity: 10,
      _id: "1",
      calories: 0,
      carbohydrates: 0,
      fat: 0,
      image: "",
      image_large: "",
      image_mobile: "",
      name: "",
      price: 0,
      proteins: 0,
      type: "bun",
    };

    const testState = {
      selectedIngredient: ingredient,
      modalIsOpen: false,
    };

    expect(reducer(testState, deselectIngredient)).toEqual({
      selectedIngredient: undefined,
      modalIsOpen: false,
    });
  });

  it("should open modal", function () {
    expect(reducer(undefined, openIngredientDetailsModal)).toEqual({
      selectedIngredient: undefined,
      modalIsOpen: true,
    })
  });

  it("should close modal", function () {
    const testState = {
      selectedIngredient: undefined,
      modalIsOpen: true,
    }

    expect(reducer(testState, closeIngredientDetailsModal)).toEqual({
      selectedIngredient: undefined,
      modalIsOpen: false,
    })
  });
});
