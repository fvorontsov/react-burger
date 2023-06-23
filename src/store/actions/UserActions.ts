import { createAction } from "@reduxjs/toolkit";
import { ILoginData, IUser, IUserWithPassword } from "../../types/user";
import { createAppAsyncThunk, getErrorDescription } from "../../utils/utils";
import {login, register} from "../../utils/api";

export const userRegister = createAppAsyncThunk<IUser, IUserWithPassword>(
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

export const userLogin = createAppAsyncThunk<IUser, ILoginData>(
    'user/login',
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

export const setUser = createAction<IUser>("user/setUser");
export const setIsAuthChecked = createAction<boolean>("user/setIsAuthChecked");
export const setIsWaitingReset = createAction<boolean>("user/setWaitingReset");
export const clear = createAction("user/clear");
