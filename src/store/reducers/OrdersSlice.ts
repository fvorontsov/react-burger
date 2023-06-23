import { createSlice } from "@reduxjs/toolkit";
import {
  ordersOnWSClose,
  ordersOnWSError,
  ordersOnWSMessage,
  ordersOnWSOpen,
} from "../actions/OrdersActions";
import { TOrder } from "../../types/order";

interface IOrdersState {
  isOpen: boolean;
  orders: Array<TOrder>;
  total: number;
  totalToday: number;
  error: string | null;
}

const initialState: IOrdersState = {
  isOpen: false,
  orders: [],
  total: 0,
  totalToday: 0,
  error: null,
};

export const ordersSlice=  createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ordersOnWSOpen, (state) => {
        state.isOpen = true;
        state.error = null;
      })
      .addCase(ordersOnWSError, (state, action) => {
        state.error = action.payload;
      })
      .addCase(ordersOnWSClose, (state) => {
        state.isOpen = false;
        state.error = null;
      })
      .addCase(ordersOnWSMessage, (state, action) => {
        state.orders = action.payload.orders
          .filter(
            (order) =>
              order._id?.length > 0 &&
              order.number > 0 &&
              order.name?.length > 0 &&
              order.ingredients?.length > 0 &&
              order.updatedAt?.length > 0
          )
          .reverse();
        state.total = action.payload.total;
        state.totalToday = action.payload.totalToday;
      });
  },
});

export default ordersSlice.reducer
