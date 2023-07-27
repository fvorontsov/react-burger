import { ordersSlice } from "./OrdersSlice";
import { TOrder } from "../../types/order";
import {
  ordersOnWSClose,
  ordersOnWSError,
  ordersOnWSMessage,
  ordersOnWSOpen,
} from "../actions/OrdersActions";

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

  it("should open", function () {
    expect(reducer(undefined, ordersOnWSOpen)).toEqual({
      isOpen: true,
      orders: [],
      total: 0,
      totalToday: 0,
      error: null,
    });
  });

  it("should parse error", function () {
    expect(reducer(undefined, ordersOnWSError("error message"))).toEqual({
      isOpen: false,
      orders: [],
      total: 0,
      totalToday: 0,
      error: "error message",
    });
  });

  it("should close", function () {
    const testState = {
      isOpen: true,
      orders: [],
      total: 0,
      totalToday: 0,
      error: null,
    };
    expect(reducer(testState, ordersOnWSClose())).toEqual({
      isOpen: false,
      orders: [],
      total: 0,
      totalToday: 0,
      error: null,
    });
  });

  it("should update state", () => {
    const order1: TOrder = {
      _id: "a",
      name: "test",
      status: "done",
      number: 60,
      createdAt: "123",
      updatedAt: "456",
      ingredients: ["a", "b", "c"],
    };
    const order2: TOrder = {
      _id: "a",
      name: "test",
      status: "done",
      number: 61,
      createdAt: "123",
      updatedAt: "456",
      ingredients: ["a", "b", "c"],
    };
    expect(
      reducer(
        undefined,
        ordersOnWSMessage({
          orders: [order1, order2],
          total: 42,
          totalToday: 24,
        })
      )
    ).toEqual({
      isOpen: false,
      error: null,
      orders: [order2, order1],
      total: 42,
      totalToday: 24,
    });
  });
});
