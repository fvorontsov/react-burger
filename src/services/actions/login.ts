import * as api from "../../utils/api";
import { TokenIdentifiers } from "../../utils/constants";
import {
  LOGIN_FORM_SUBMIT,
  LOGIN_FORM_SUBMIT_FAILED,
  LOGIN_FORM_SUBMIT_SUCCEED,
} from "../constants";
import { AppDispatch, AppThunk } from "../types";

export interface ILoginFormSubmitAction {
  readonly type: typeof LOGIN_FORM_SUBMIT;
}

export interface ILoginFormSubmitSucceedAction {
  readonly type: typeof LOGIN_FORM_SUBMIT_SUCCEED;
}

export interface ILoginFormSubmitFailed {
  readonly type: typeof LOGIN_FORM_SUBMIT_FAILED;
}

export type TLoginActions =
  | ILoginFormSubmitAction
  | ILoginFormSubmitSucceedAction
  | ILoginFormSubmitFailed;

export const login: AppThunk = (form) => (dispatch: AppDispatch) => {
  dispatch({
    type: LOGIN_FORM_SUBMIT,
  });
  api
    .login(form)
    .then((data) => {
      dispatch({
        type: LOGIN_FORM_SUBMIT_SUCCEED,
        user: data.user,
      });

      localStorage.setItem(TokenIdentifiers.ACCESS, data.accessToken);
      localStorage.setItem(TokenIdentifiers.REFRESH, data.refreshToken);
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FORM_SUBMIT_FAILED,
      });
      console.log(err);
    });
};
