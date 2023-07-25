import { ordersSlice } from "./OrdersSlice";

describe("Order reducers", () => {
  const reducer = ordersSlice.reducer;
  it("has initial state", () => {
    expect(reducer(undefined, { type: "test" })).toEqual({
      isOpen: false,
      orders: [],
      total: 0,
      totalToday: 0,
      error: null,
    });
  });
});
