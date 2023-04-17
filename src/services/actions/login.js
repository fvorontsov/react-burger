import * as api from "../../utils/api";
import { TokenIdentifiers } from "../../utils/constants";

export const LOGIN_FORM_SUBMIT = "LOGIN_FORM_SUBMIT";
export const LOGIN_FORM_SUBMIT_SUCCEED = "LOGIN_FORM_SUBMIT_SUCCEED";
export const LOGIN_FORM_SUBMIT_FAILED = "LOGIN_FORM_SUBMIT_FAILED";

export function login(form) {
  return function (dispatch) {
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
}
