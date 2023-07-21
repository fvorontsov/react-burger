import { createAction } from "@reduxjs/toolkit";
import { TLoginData, TUser, TUserWithPassword } from "../../types/user";
import { createAppAsyncThunk, getErrorDescription } from "../../utils/utils";
import { login, register } from "../../utils/api";

export const userRegister = createAppAsyncThunk<TUser, TUserWithPassword>(
  "user/register",
  async (user, thunkApi) => {
    try {
      return await register(user);
    } catch (error) {
      return thunkApi.rejectWithValue(
        getErrorDescription(
          error,
          "Не получилось зарегистрировать пользователя"
        )
      );
    }
  }
);

export const userLogin = createAppAsyncThunk<TUser, TLoginData>(
  "user/login",
  async (user, thunkApi) => {
    try {
      return login(user);
    } catch (error) {
      return thunkApi.rejectWithValue(
        getErrorDescription(error, "Не получилось авторизовать пользователя")
      );
    }
  }
);

export const setUser = createAction<TUser>("user/setUser");
export const setIsAuthChecked = createAction<boolean>("user/setIsAuthChecked");
export const clear = createAction("user/clear");
