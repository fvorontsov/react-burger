import { userSlice } from "./UserSlice";

describe("User reducers", () => {
  const reducer = userSlice.reducer;
  it("has initial state", () => {
    expect(reducer(undefined, { type: "test" })).toEqual({
      user: null,
      isAuthChecked: false,
    });
  });
});
