import { burgerConstructorSlice } from "./BurgerConstructorSlice";
import {
  addIngredient,
  clearIngredients,
  removeIngredient,
  selectBun,
} from "../actions/BurgerConstructorActions";
import { TConstructorIngredient } from "../../types";

jest.mock("uuid", () => ({ v4: () => "1" }));

describe("Burger constructor reducers", () => {
  const reducer = burgerConstructorSlice.reducer;

  const bun: TConstructorIngredient = {
    uuid: "123",
    index: 1,
    _id: "",
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

  const ingredient1: TConstructorIngredient = {
    uuid: "1",
    index: 1,
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

  const ingredient2: TConstructorIngredient = {
    uuid: "1",
    index: 2,
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

  const ingredient3: TConstructorIngredient = {
    uuid: "1",
    index: 3,
    _id: "3",
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

  it("has initial state", () => {
    expect(reducer(undefined, { type: "test" })).toEqual({
      ingredients: [],
      bun: null,
    });
  });

  it("select bun", function () {
    expect(reducer(undefined, selectBun(bun))).toEqual({
      ingredients: [],
      bun: bun,
    });
  });

  it("should add ingredient", function () {
    expect(reducer(undefined, addIngredient(ingredient1))).toEqual({
      ingredients: [ingredient1],
      bun: null,
    });
  });

  it("should remove ingredient", function () {
    const testState = {
      ingredients: [ingredient1],
      bun: null,
    };

    expect(reducer(testState, removeIngredient("1"))).toEqual({
      ingredients: [],
      bun: null,
    });
  });

  it("should clear ingredients", function () {
    const testState = {
      ingredients: [ingredient1, ingredient2, ingredient3],
      bun: null,
    };

    expect(reducer(testState, clearIngredients)).toEqual({
      ingredients: [],
      bun: null,
    });
  });
});
