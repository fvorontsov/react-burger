import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../types/user";
import {
  clear,
  setIsAuthChecked,
  setUser,
  userLogin,
  userRegister,
} from "../actions/UserActions";

type TUserState = {
  user: TUser | null;
  isAuthChecked: boolean;
};

const initialState: TUserState = {
  user: null,
  isAuthChecked: false
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
      .addCase(clear, (state) => {
        state.user = null;
      });
  },
});

export default userSlice.reducer;
