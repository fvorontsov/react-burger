import {
  EDIT_PROFILE_FORM_SUBMIT,
  EDIT_PROFILE_FORM_SUBMIT_FAILED,
  EDIT_PROFILE_FORM_SUBMIT_SUCCEED,
  FORGOT_PASSWORD_FORM_SUBMIT,
  FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
  FORGOT_PASSWORD_FORM_SUBMIT_SUCCEED,
  FORGOT_PASSWORD_RESET,
  GET_USER_REQUEST_FAILED,
  GET_USER_REQUEST_STARTED,
  GET_USER_REQUEST_SUCCEED,
  LOGIN_FORM_SUBMIT,
  LOGIN_FORM_SUBMIT_FAILED,
  LOGIN_FORM_SUBMIT_SUCCEED,
  LOGOUT_REQUEST_FAILED,
  LOGOUT_REQUEST_STARTED,
  LOGOUT_REQUEST_SUCCEED,
  REFRESH_TOKEN_REQUEST_FAILED,
  REFRESH_TOKEN_REQUEST_STARTED,
  REFRESH_TOKEN_REQUEST_SUCCEED,
  REGISTER_FORM_SUBMIT,
  REGISTER_FORM_SUBMIT_FAILED,
  REGISTER_FORM_SUBMIT_SUCCESS,
  RESET_PASSWORD_FORM_SUBMIT,
  RESET_PASSWORD_FORM_SUBMIT_FAILED,
  RESET_PASSWORD_FORM_SUBMIT_SUCCESS,
} from "../constants";

const initialState = {
  isAuthenticated: false,

  user: {
    name: "",
    email: "",
    password: "",
  },

  registerRequestInProgress: false,
  registerRequestFailed: false,

  loginRequestInProgress: false,
  loginRequestFailed: false,

  forgotPasswordRequestInProgress: false,
  forgotPasswordRequestSucceed: false,
  forgotPasswordRequestFailed: false,

  resetPasswordRequestInProgress: false,
  resetPasswordRequestSucceed: false,
  resetPasswordRequestFailed: false,

  editProfileRequestInProgress: false,
  editProfileRequestFailed: false,

  getUserRequestInProgress: false,
  getUserRequestFailed: false,

  refreshTokenRequestInProgress: false,
  refreshTokenRequestFailed: false,

  logoutRequestInProgress: false,
  logoutRequestFailed: false,
};

export const accessReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_FORM_SUBMIT: {
      return {
        ...state,
        registerRequestInProgress: true,
        registerRequestFailed: false,
      };
    }
    case REGISTER_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        registerRequestInProgress: false,
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
        },
        isAuthenticated: true,
      };
    }
    case REGISTER_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        registerRequestInProgress: false,
        registerRequestFailed: true,
      };
    }
    case LOGIN_FORM_SUBMIT: {
      return {
        ...state,
        loginRequestInProgress: true,
        loginRequestFailed: false,
      };
    }
    case LOGIN_FORM_SUBMIT_SUCCEED: {
      return {
        ...state,
        loginRequestInProgress: false,
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
        },
        isAuthenticated: true,
      };
    }
    case LOGIN_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        loginRequestInProgress: false,
        loginRequestFailed: true,
      };
    }
    case FORGOT_PASSWORD_FORM_SUBMIT: {
      return {
        ...state,
        forgotPasswordRequestInProgress: true,
        forgotPasswordRequestFailed: false,
        forgotPasswordRequestSucceed: false,
      };
    }
    case FORGOT_PASSWORD_FORM_SUBMIT_SUCCEED: {
      return {
        ...state,
        forgotPasswordRequestInProgress: false,
        forgotPasswordRequestSucceed: true,
      };
    }
    case FORGOT_PASSWORD_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        forgotPasswordRequestInProgress: false,
        forgotPasswordRequestFailed: true,
      };
    }
    case RESET_PASSWORD_FORM_SUBMIT: {
      return {
        ...state,
        resetPasswordRequestInProgress: true,
        resetPasswordRequestFailed: false,
        resetPasswordRequestSucceed: false,
      };
    }
    case RESET_PASSWORD_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        resetPasswordRequestInProgress: false,
        resetPasswordRequestSucceed: true,
      };
    }
    case RESET_PASSWORD_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        resetPasswordRequestInProgress: false,
        resetPasswordRequestFailed: true,
      };
    }
    case FORGOT_PASSWORD_RESET: {
      return {
        ...state,
        resetPasswordRequestInProgress: false,
        resetPasswordRequestFailed: false,
        resetPasswordRequestSucceed: false,
      };
    }
    case EDIT_PROFILE_FORM_SUBMIT: {
      return {
        ...state,
        editProfileRequestInProgress: true,
        editProfileRequestFailed: false,
      };
    }
    case EDIT_PROFILE_FORM_SUBMIT_SUCCEED: {
      return {
        ...state,
        editProfileRequestInProgress: false,
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
        },
      };
    }
    case EDIT_PROFILE_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        editProfileRequestInProgress: false,
        editProfileRequestFailed: true,
      };
    }
    case GET_USER_REQUEST_STARTED: {
      return {
        ...state,
        getUserRequestInProgress: true,
        getUserRequestFailed: false,
      };
    }
    case GET_USER_REQUEST_SUCCEED: {
      return {
        ...state,
        getUserRequestInProgress: false,
        isAuthenticated: true,
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
        },
      };
    }
    case GET_USER_REQUEST_FAILED: {
      return {
        ...state,
        getUserRequestInProgress: false,
        getUserRequestFailed: true,
        isAuthenticated: false,
      };
    }
    case REFRESH_TOKEN_REQUEST_STARTED: {
      return {
        ...state,
        refreshTokenRequestInProgress: true,
        refreshTokenRequestFailed: false,
        getUserRequestFailed: false,
        editProfileRequestFailed: false,
      };
    }
    case REFRESH_TOKEN_REQUEST_SUCCEED: {
      return {
        ...state,
        refreshTokenRequestInProgress: false,
        isAuthenticated: true,
      };
    }
    case REFRESH_TOKEN_REQUEST_FAILED: {
      return {
        ...state,
        refreshTokenRequestInProgress: false,
        refreshTokenRequestFailed: true,
        isAuthenticated: false,
      };
    }
    case LOGOUT_REQUEST_STARTED: {
      return {
        ...state,
        isAuthenticated: false,
        logoutRequestInProgress: true,
        logoutRequestFailed: false,
      };
    }
    case LOGOUT_REQUEST_SUCCEED: {
      return {
        ...state,
        logoutRequestInProgress: false,
      };
    }
    case LOGOUT_REQUEST_FAILED: {
      return {
        ...state,
        logoutRequestInProgress: false,
        logoutRequestFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};
