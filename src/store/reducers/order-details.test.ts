import { orderDetailsSlice } from "./OrderDetailsSlice";

describe("Order details reducers", () => {
  const reducer = orderDetailsSlice.reducer;
  it("has initial state", () => {
    expect(reducer(undefined, { type: "test" })).toEqual({
      orderId: "",
      makeOrderRequestInProgress: false,
      makeOrderRequestFailed: false,
      modalIsOpen: false,
    });
  });
});
