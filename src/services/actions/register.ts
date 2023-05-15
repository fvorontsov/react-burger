import * as api from "../../utils/api";
import { TokenIdentifiers } from "../../utils/constants";
import {
  REGISTER_FORM_SUBMIT,
  REGISTER_FORM_SUBMIT_FAILED,
  REGISTER_FORM_SUBMIT_SUCCESS,
} from "../constants";
import { AppDispatch, AppThunk } from "../types";

export interface IRegisterFormSubmitAction {
  readonly type: typeof REGISTER_FORM_SUBMIT;
}

export interface IRegisterFormSubmitSuccessAction {
  readonly type: typeof REGISTER_FORM_SUBMIT_SUCCESS;
}

export interface IRegisterFormSubmitFailedAction {
  readonly type: typeof REGISTER_FORM_SUBMIT_FAILED;
}

export type TRegisterActions =
  | IRegisterFormSubmitAction
  | IRegisterFormSubmitSuccessAction
  | IRegisterFormSubmitFailedAction;

export const register: AppThunk = (form) => (dispatch: AppDispatch) => {
  dispatch({
    type: REGISTER_FORM_SUBMIT,
  });
  api
    .register(form)
    .then((data) => {
      dispatch({
        type: REGISTER_FORM_SUBMIT_SUCCESS,
        user: data.user,
      });

      localStorage.setItem(TokenIdentifiers.ACCESS, data.accessToken);
      localStorage.setItem(TokenIdentifiers.REFRESH, data.refreshToken);
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FORM_SUBMIT_FAILED,
      });
      console.log(err);
    });
};
