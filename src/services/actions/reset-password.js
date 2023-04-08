import * as api from "../../utils/api";

export const RESET_PASSWORD_FORM_SUBMIT = "RESET_PASSWORD_FORM_SUBMIT";
export const RESET_PASSWORD_FORM_SUBMIT_SUCCESS =
  "RESET_PASSWORD_FORM_SUBMIT_SUCCESS";
export const RESET_PASSWORD_FORM_SUBMIT_FAILED =
  "RESET_PASSWORD_FORM_SUBMIT_FAILED";

export function resetPassword(form) {
  return function (dispatch) {
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
  };
}
