import * as api from "../../utils/api";
import {
  FORGOT_PASSWORD_FORM_SUBMIT,
  FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
  FORGOT_PASSWORD_FORM_SUBMIT_SUCCEED,
  FORGOT_PASSWORD_RESET,
} from "../constants";
import { AppThunk } from "../types";

export interface IForgotPasswordFormSubmitAction {
  readonly type: typeof FORGOT_PASSWORD_FORM_SUBMIT;
}

export interface IForgotPasswordFormSubmitSucceedAction {
  readonly type: typeof FORGOT_PASSWORD_FORM_SUBMIT_SUCCEED;
}

export interface IForgotPasswordFormSubmitFailedAction {
  readonly type: typeof FORGOT_PASSWORD_FORM_SUBMIT_FAILED;
}

export interface IForgotPasswordResetAction {
  readonly type: typeof FORGOT_PASSWORD_RESET;
}

export type TForgotPasswordActions =
  | IForgotPasswordFormSubmitAction
  | IForgotPasswordFormSubmitSucceedAction
  | IForgotPasswordFormSubmitFailedAction
  | IForgotPasswordResetAction;

export const forgotPassword: AppThunk = (form) => (dispatch) => {
  dispatch({
    type: FORGOT_PASSWORD_FORM_SUBMIT,
  });
  api
    .forgotPassword(form)
    .then(() => {
      dispatch({
        type: FORGOT_PASSWORD_FORM_SUBMIT_SUCCEED,
      });
    })
    .catch((err) => {
      dispatch({
        type: FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
      });
      console.log(err);
    });
};
