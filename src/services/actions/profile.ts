import * as api from "../../utils/api";
import { Errors, TokenIdentifiers } from "../../utils/constants";
import {
  EDIT_PROFILE_FORM_SUBMIT,
  EDIT_PROFILE_FORM_SUBMIT_FAILED,
  EDIT_PROFILE_FORM_SUBMIT_SUCCEED,
  GET_USER_REQUEST_FAILED,
  GET_USER_REQUEST_STARTED,
  GET_USER_REQUEST_SUCCEED,
  LOGOUT_REQUEST_FAILED,
  LOGOUT_REQUEST_STARTED,
  LOGOUT_REQUEST_SUCCEED,
  REFRESH_TOKEN_REQUEST_FAILED,
  REFRESH_TOKEN_REQUEST_STARTED,
  REFRESH_TOKEN_REQUEST_SUCCEED,
} from "../constants/profile";
import { AppDispatch, AppThunk } from "../types";

export interface IEditProfileFormSubmitAction {
  readonly type: typeof EDIT_PROFILE_FORM_SUBMIT;
}

export interface IEditProfileFormSubmitSucceedAction {
  readonly type: typeof EDIT_PROFILE_FORM_SUBMIT_SUCCEED;
}

export interface IEditProfileFormSubmitFailedAction {
  readonly type: typeof EDIT_PROFILE_FORM_SUBMIT_FAILED;
}

export interface IGetUserRequestStartedAction {
  readonly type: typeof GET_USER_REQUEST_STARTED;
}

export interface IGetUserRequestSucceedAction {
  readonly type: typeof GET_USER_REQUEST_SUCCEED;
}

export interface IGetUserRequestFailedAction {
  readonly type: typeof GET_USER_REQUEST_FAILED;
}

export interface IRefreshTokenRequestStartedAction {
  readonly type: typeof REFRESH_TOKEN_REQUEST_STARTED;
}

export interface IRefreshTokenRequestSucceedAction {
  readonly type: typeof REFRESH_TOKEN_REQUEST_SUCCEED;
}

export interface IRefreshTokenRequestFailedAction {
  readonly type: typeof REFRESH_TOKEN_REQUEST_FAILED;
}

export interface ILogoutRequestStartedAction {
  readonly type: typeof LOGOUT_REQUEST_STARTED;
}

export interface ILogoutRequestSucceedAction {
  readonly type: typeof LOGOUT_REQUEST_SUCCEED;
}

export interface ILogoutRequestFailedAction {
  readonly type: typeof LOGOUT_REQUEST_FAILED;
}

export type TProfileActions =
  | IEditProfileFormSubmitAction
  | IEditProfileFormSubmitSucceedAction
  | IEditProfileFormSubmitFailedAction
  | IGetUserRequestStartedAction
  | IGetUserRequestSucceedAction
  | IGetUserRequestFailedAction
  | IRefreshTokenRequestStartedAction
  | IRefreshTokenRequestSucceedAction
  | IRefreshTokenRequestFailedAction
  | ILogoutRequestStartedAction
  | ILogoutRequestSucceedAction
  | ILogoutRequestFailedAction;

export const editProfile: AppThunk =
  (form, firstAttempt) => (dispatch: AppDispatch) => {
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

export const getUser: AppThunk = (firstAttempt) => (dispatch: AppDispatch) => {
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

export const refreshToken: AppThunk = () => (dispatch: AppDispatch) => {
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

export const logout: AppThunk = () => (dispatch: AppDispatch) => {
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
