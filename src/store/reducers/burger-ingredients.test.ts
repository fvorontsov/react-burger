import { burgerIngredientsSlice } from "./BurgerIngredientsSlice";
import {
  clearQuantity,
  decreaseQuantity,
  increaseQuantity,
  loadIngredients,
  selectBuns,
} from "../actions/BurgerIngredientActions";
import { TCountedIngredient } from "../../types";

// Mock out all top level functions, such as get, put, delete and post:
jest.mock("axios");

describe("Burger Ingredients reducers", () => {
  const reducer = burgerIngredientsSlice.reducer;

  const initialState = {
    ingredients: [],
    loading: false,
    error: "",
  };

  it("has initial state", () => {
    expect(reducer(undefined, { type: "test" })).toEqual(initialState);
  });

  it("ingredients.pending", () => {
    expect(reducer(initialState, loadIngredients.pending)).toEqual({
      ingredients: [],
      loading: true,
      error: "",
    });
  });

  it("ingredients.rejected", () => {
    expect(reducer(initialState, loadIngredients.rejected)).toEqual({
      ingredients: [],
      loading: false,
      error: "Unknown error",
    });
  });

  it("ingredients.fulfilled", () => {
    const ingredient1: TCountedIngredient = {
      quantity: 1,
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

    const ingredient2: TCountedIngredient = {
      quantity: 1,
      _id: "2",
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

    expect(
      reducer(
        initialState,
        loadIngredients.fulfilled([ingredient1, ingredient2], "", undefined)
      )
    ).toEqual({
      ingredients: [ingredient1, ingredient2],
      loading: false,
      error: "",
    });
  });

  it("should clear quantity", function () {
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
      ingredients: [ingredient],
      loading: false,
      error: "",
    };

    expect(reducer(testState, clearQuantity)).toEqual({
      ingredients: [{ ...ingredient, quantity: 0 }],
      loading: false,
      error: "",
    });
  });

  it("should decrease quantity", function () {
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
      ingredients: [ingredient],
      loading: false,
      error: "",
    };

    expect(reducer(testState, decreaseQuantity("1"))).toEqual({
      ingredients: [{ ...ingredient, quantity: 9 }],
      loading: false,
      error: "",
    });
  });

  it("should increase quantity", function () {
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
      ingredients: [ingredient],
      loading: false,
      error: "",
    };

    expect(reducer(testState, increaseQuantity("1"))).toEqual({
      ingredients: [{ ...ingredient, quantity: 11 }],
      loading: false,
      error: "",
    });
  });

  it("should select buns", function () {
    const ingredient: TCountedIngredient = {
      quantity: 0,
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
      ingredients: [ingredient],
      loading: false,
      error: "",
    };

    expect(reducer(testState, selectBuns("1"))).toEqual({
      ingredients: [{ ...ingredient, quantity: 2 }],
      loading: false,
      error: "",
    });
  });
});
