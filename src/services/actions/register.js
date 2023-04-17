import * as api from "../../utils/api";
import { TokenIdentifiers } from "../../utils/constants";

export const REGISTER_FORM_SUBMIT = "REGISTER_FORM_SUBMIT";
export const REGISTER_FORM_SUBMIT_SUCCESS = "REGISTER_FORM_SUBMIT_SUCCESS";
export const REGISTER_FORM_SUBMIT_FAILED = "REGISTER_FORM_SUBMIT_FAILED";

export function register(form) {
  return function (dispatch) {
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
}
