import { feedSlice } from "./FeedSlice";
import { TOrder } from "../../types/order";
import {
  feedOnWSClose,
  feedOnWSError,
  feedOnWSMessage,
  feedOnWSOpen,
} from "../actions/FeedActions";

describe("Feed reducers", () => {
  const reducer = feedSlice.reducer;
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "test" })).toEqual({
      isOpen: false,
      orders: [],
      total: 0,
      totalToday: 0,
      error: null,
    });
  });

  it("should open", function () {
    expect(reducer(undefined, feedOnWSOpen)).toEqual({
      isOpen: true,
      orders: [],
      total: 0,
      totalToday: 0,
      error: null,
    });
  });

  it("should parse error", function () {
    expect(reducer(undefined, feedOnWSError("error message"))).toEqual({
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
    expect(reducer(testState, feedOnWSClose())).toEqual({
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
        feedOnWSMessage({
          orders: [order1, order2],
          total: 42,
          totalToday: 24,
        })
      )
    ).toEqual({
      isOpen: false,
      error: null,
      orders: [order1, order2],
      total: 42,
      totalToday: 24,
    });
  });
});
