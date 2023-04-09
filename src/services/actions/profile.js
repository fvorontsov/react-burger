import * as api from "../../utils/api";
import { Errors, TokenIdentifiers } from "../../utils/constants";

export const EDIT_PROFILE_FORM_SUBMIT = "EDIT_PROFILE_FORM_SUBMIT";
export const EDIT_PROFILE_FORM_SUBMIT_SUCCEED =
  "EDIT_PROFILE_FORM_SUBMIT_SUCCEED";
export const EDIT_PROFILE_FORM_SUBMIT_FAILED =
  "EDIT_PROFILE_FORM_SUBMIT_FAILED";

export const GET_USER_REQUEST_STARTED = "GET_USER_REQUEST_STARTED";
export const GET_USER_REQUEST_SUCCEED = "GET_USER_REQUEST_SUCCEED";
export const GET_USER_REQUEST_FAILED = "GET_USER_REQUEST_FAILED";

export const REFRESH_TOKEN_REQUEST_STARTED = "REFRESH_TOKEN_REQUEST_STARTED";
export const REFRESH_TOKEN_REQUEST_SUCCEED = "REFRESH_TOKEN_REQUEST_SUCCEED";
export const REFRESH_TOKEN_REQUEST_FAILED = "REFRESH_TOKEN_REQUEST_FAILED";

export const LOGOUT_REQUEST_STARTED = "LOGOUT_REQUEST_STARTED";
export const LOGOUT_REQUEST_SUCCEED = "LOGOUT_REQUEST_SUCCEED";
export const LOGOUT_REQUEST_FAILED = "LOGOUT_REQUEST_FAILED";

export function editProfile(form, firstAttempt) {
  return function (dispatch) {
    dispatch({
      type: EDIT_PROFILE_FORM_SUBMIT,
    });
    api
      .updateUser(form)
      .then((data) => {
        dispatch({
          type: EDIT_PROFILE_FORM_SUBMIT_SUCCEED,
          user: data.user,
        });
      })
      .catch((err) => {
        if (err.message === Errors.JWT_EXPIRED) {
          dispatch(refreshToken());
          if (firstAttempt) {
            dispatch(editProfile(form, false));
          }
        } else {
          dispatch({
            type: EDIT_PROFILE_FORM_SUBMIT_FAILED,
            message: err.message,
          });
        }
      });
  };
}

export function getUser(firstAttempt) {
  return function (dispatch) {
    if (!localStorage.hasOwnProperty(TokenIdentifiers.ACCESS)) {
      return;
    }
    dispatch({
      type: GET_USER_REQUEST_STARTED,
    });
    api
      .getUser()
      .then((data) => {
        dispatch({
          type: GET_USER_REQUEST_SUCCEED,
          user: data.user,
        });
      })
      .catch((err) => {
        if (err.message === Errors.JWT_EXPIRED) {
          dispatch(refreshToken());
          if (firstAttempt) {
            dispatch(getUser(false));
          }
        } else {
          dispatch({
            type: GET_USER_REQUEST_FAILED,
            message: err.message,
          });
        }
      });
  };
}

export function refreshToken() {
  return function (dispatch) {
    dispatch({
      type: REFRESH_TOKEN_REQUEST_STARTED,
    });
    api
      .refreshToken()
      .then((data) => {
        dispatch({
          type: REFRESH_TOKEN_REQUEST_SUCCEED,
        });
        localStorage.removeItem(TokenIdentifiers.ACCESS);
        localStorage.removeItem(TokenIdentifiers.REFRESH);

        localStorage.setItem(TokenIdentifiers.ACCESS, data.accessToken);
        localStorage.setItem(TokenIdentifiers.REFRESH, data.refreshToken);
      })
      .catch((err) => {
        dispatch({
          type: REFRESH_TOKEN_REQUEST_FAILED,
        });
        console.log(err);
      });
  };
}

export function logout() {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST_STARTED,
    });
    api
      .logout()
      .then(() => {
        dispatch({
          type: LOGOUT_REQUEST_SUCCEED,
        });
        localStorage.removeItem(TokenIdentifiers.ACCESS);
        localStorage.removeItem(TokenIdentifiers.REFRESH);
      })
      .catch((err) => {
        dispatch({
          type: LOGOUT_REQUEST_FAILED,
        });
        console.log(err);
      });
  };
}
