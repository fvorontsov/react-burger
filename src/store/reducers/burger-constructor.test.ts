import { burgerConstructorSlice } from "./BurgerConstructorSlice";

describe("Burger constructor reducers", () => {
  const reducer = burgerConstructorSlice.reducer;
  it("has initial state", () => {
    expect(reducer(undefined, { type: "test" })).toEqual({
      ingredients: [],
      bun: null,
    });
  });
});
