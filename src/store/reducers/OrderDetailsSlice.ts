import { createSlice } from "@reduxjs/toolkit";
import {
  clearOrder,
  closeOrderDetailsModal,
  openOrderDetailsModal,
  placeOrder,
} from "../actions/OrderDetailsActions";

export type TOrderDetailsState = {
  orderId: string;
  makeOrderRequestInProgress: boolean;
  makeOrderRequestFailed: boolean;
  modalIsOpen: boolean;
};

const initialState: TOrderDetailsState = {
  orderId: "",
  makeOrderRequestInProgress: false,
  makeOrderRequestFailed: false,
  modalIsOpen: false,
};

export const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.makeOrderRequestInProgress = true;
        state.makeOrderRequestFailed = false;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.makeOrderRequestInProgress = false;
        state.makeOrderRequestFailed = false;
        state.orderId = action.payload;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.makeOrderRequestFailed = true;
        state.makeOrderRequestInProgress = false;
        state.orderId = "";
      })
      .addCase(clearOrder, (state, action) => {
        state.orderId = "";
      })
      .addCase(openOrderDetailsModal, (state, action) => {
        state.modalIsOpen = true;
      })
      .addCase(closeOrderDetailsModal, (state, action) => {
        state.modalIsOpen = false;
      });
  },
});

export default orderDetailsSlice.reducer;
