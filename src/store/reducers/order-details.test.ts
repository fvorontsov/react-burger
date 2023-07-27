import { orderDetailsSlice } from "./OrderDetailsSlice";
import {
  clearOrder,
  closeOrderDetailsModal,
  openOrderDetailsModal,
  placeOrder,
} from "../actions/OrderDetailsActions";

describe("Order details reducers", () => {
  const reducer = orderDetailsSlice.reducer;
  const initialState = {
    orderId: "",
    makeOrderRequestInProgress: false,
    makeOrderRequestFailed: false,
    modalIsOpen: false,
  };

  it("has initial state", () => {
    expect(reducer(undefined, { type: "test" })).toEqual(initialState);
  });

  it("orderRequest.pending", () => {
    expect(reducer(initialState, placeOrder.pending)).toEqual({
      orderId: "",
      makeOrderRequestInProgress: true,
      makeOrderRequestFailed: false,
      modalIsOpen: false,
    });
  });

  it("orderRequest.rejected", () => {
    expect(reducer(initialState, placeOrder.rejected)).toEqual({
      orderId: "",
      makeOrderRequestInProgress: false,
      makeOrderRequestFailed: true,
      modalIsOpen: false,
    });
  });

  it("orderRequest.fulfilled", () => {
    expect(
      reducer(initialState, placeOrder.fulfilled("12", "", { ingredients: [] }))
    ).toEqual({
      orderId: "12",
      makeOrderRequestInProgress: false,
      makeOrderRequestFailed: false,
      modalIsOpen: false,
    });
  });

  it("should clear order", function () {
    const testState = {
      orderId: "20",
      makeOrderRequestInProgress: false,
      makeOrderRequestFailed: false,
      modalIsOpen: false,
    };
    expect(reducer(testState, clearOrder)).toEqual({
      orderId: "",
      makeOrderRequestInProgress: false,
      makeOrderRequestFailed: false,
      modalIsOpen: false,
    });
  });

  it("should open order modal", function () {
    expect(reducer(initialState, openOrderDetailsModal)).toEqual({
      orderId: "",
      makeOrderRequestInProgress: false,
      makeOrderRequestFailed: false,
      modalIsOpen: true,
    });
  });

  it("should close order modal", function () {
    const testState = {
      orderId: "",
      makeOrderRequestInProgress: false,
      makeOrderRequestFailed: false,
      modalIsOpen: true,
    };

    expect(reducer(testState, closeOrderDetailsModal)).toEqual({
      orderId: "",
      makeOrderRequestInProgress: false,
      makeOrderRequestFailed: false,
      modalIsOpen: false,
    });
  });
});
