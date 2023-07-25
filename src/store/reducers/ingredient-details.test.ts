import { ingredientDetailsSlice } from "./IngredientDetailsSlice";

describe("Ingredient Details reducers", () => {
  const reducer = ingredientDetailsSlice.reducer;
  it("has initial state", () => {
    expect(reducer(undefined, { type: "test" })).toEqual({
      selectedIngredient: undefined,
      modalIsOpen: false,
    });
  });
});
