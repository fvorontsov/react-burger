import * as api from "../../utils/api";
import {
  RESET_PASSWORD_FORM_SUBMIT,
  RESET_PASSWORD_FORM_SUBMIT_FAILED,
  RESET_PASSWORD_FORM_SUBMIT_SUCCESS,
} from "../constants";
import { AppThunk } from "../types";

export interface IResetPasswordFormSubmitAction {
  readonly type: typeof RESET_PASSWORD_FORM_SUBMIT;
}

export interface IResetPasswordFormSubmitSuccessAction {
  readonly type: typeof RESET_PASSWORD_FORM_SUBMIT_SUCCESS;
}

export interface IResetPasswordFormSubmitFailedAction {
  readonly type: typeof RESET_PASSWORD_FORM_SUBMIT_FAILED;
}

export type TResetPasswordActions =
  | IResetPasswordFormSubmitAction
  | IResetPasswordFormSubmitSuccessAction
  | IResetPasswordFormSubmitFailedAction;

export const resetPassword: AppThunk = (form) => (dispatch) => {
  {
    dispatch({
      type: RESET_PASSWORD_FORM_SUBMIT,
    });
    api
      .resetPassword(form)
      .then((data) => {
        dispatch({
          type: RESET_PASSWORD_FORM_SUBMIT_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: RESET_PASSWORD_FORM_SUBMIT_FAILED,
        });
        console.log(err);
      });
  }
};
