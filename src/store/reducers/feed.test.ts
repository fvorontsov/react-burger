import { feedSlice } from "./FeedSlice";
import { TOrder } from "../../types/order";
import { feedOnWSMessage } from "../actions/FeedActions";

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
  it("should update state", () => {
    const testOrderA: TOrder = {
      _id: "a",
      name: "test",
      status: "done",
      number: 60,
      createdAt: "123",
      updatedAt: "456",
      ingredients: ["a", "b", "c"],
    };
    const testOrderB: TOrder = {
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
          orders: [testOrderA, testOrderB],
          total: 42,
          totalToday: 24,
        })
      )
    ).toEqual({
      isOpen: false,
      error: null,
      orders: [testOrderA, testOrderB],
      total: 42,
      totalToday: 24,
    });
  });
});
