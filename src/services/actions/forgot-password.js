import * as api from "../../utils/api";

export const FORGOT_PASSWORD_FORM_SUBMIT = "FORGOT_PASSWORD_FORM_SUBMIT";
export const FORGOT_PASSWORD_FORM_SUBMIT_SUCCEED =
  "FORGOT_PASSWORD_FORM_SUBMIT_SUCCEED";
export const FORGOT_PASSWORD_FORM_SUBMIT_FAILED =
  "FORGOT_PASSWORD_FORM_SUBMIT_FAILED";
export const FORGOT_PASSWORD_RESET = "FORGOT_PASSWORD_RESET";

export function forgotPassword(form) {
  return function (dispatch) {
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
}
