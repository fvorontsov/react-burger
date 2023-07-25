import { burgerIngredientsSlice } from "./BurgerIngredientsSlice";

import * as axios from "axios";

// Mock out all top level functions, such as get, put, delete and post:
jest.mock("axios");

describe("Burger Ingredients reducers", () => {
  const reducer = burgerIngredientsSlice.reducer;
  it("has initial state", () => {
    expect(reducer(undefined, { type: "test" })).toEqual({
      ingredients: [],
      loading: false,
      error: "",
    });
  });
});
