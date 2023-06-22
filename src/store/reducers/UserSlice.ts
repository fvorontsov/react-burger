import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/user";
import {
  clear,
  setIsAuthChecked,
  setIsWaitingReset,
  setUser,
  userLogin,
  userRegister,
} from "../actions/UserActions";

interface IUserState {
  user: IUser | null;
  isAuthChecked: boolean;
  isWaitingReset: boolean;
}

const initialState: IUserState = {
  user: null,
  isAuthChecked: false,
  isWaitingReset: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setUser, (state, action) => {
        state.user = action.payload;
        state.isAuthChecked = true;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthChecked = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthChecked = true;
      })
      .addCase(setIsAuthChecked, (state, action) => {
        state.isAuthChecked = action.payload;
      })
      .addCase(setIsWaitingReset, (state, action) => {
        state.isWaitingReset = action.payload;
      })
      .addCase(clear, (state) => {
        state.user = null;
        state.isWaitingReset = false;
      });
  },
});

export default userSlice.reducer;
