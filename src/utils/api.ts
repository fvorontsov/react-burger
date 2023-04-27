import { urls } from "./urls";
import { TokenIdentifiers } from "./constants";
import {
  TConstructorIngredient,
  TForgotPasswordForm,
  TLoginForm,
  TProfileEditorForm,
  TRegistrationForm,
  TResetPasswordForm,
} from "../types";

export const fetchIngredients = () => {
  return fetch(`${urls.base}/${urls.general.ingredients}`, {
    method: "GET",
  }).then(responseOrError);
};

export const makeOrder = ({
  ingredients,
}: {
  ingredients: TConstructorIngredient[];
}) => {
  return fetch(`${urls.base}/${urls.general.orders}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getAccessToken(),
    },
    body: JSON.stringify({ ingredients: ingredients }),
  }).then(responseOrError);
};

export const login = ({ email, password }: TLoginForm) => {
  return fetch(`${urls.base}/${urls.auth.login}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(responseOrError);
};

export const register = ({ name, email, password }: TRegistrationForm) => {
  return fetch(`${urls.base}/${urls.auth.register}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(responseOrError);
};

export const forgotPassword = ({ email }: TForgotPasswordForm) => {
  return fetch(`${urls.base}/${urls.passWordReset.forgot}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  }).then(responseOrError);
};

export const resetPassword = ({ token, password }: TResetPasswordForm) => {
  return fetch(`${urls.base}/${urls.passWordReset.reset}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, password }),
  }).then(responseOrError);
};

export const getUser = () => {
  return fetch(`${urls.base}/${urls.auth.user}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: getAccessToken(),
    },
  }).then(responseOrError);
};

export const updateUser = ({ name, email, password }: TProfileEditorForm) => {
  return fetch(`${urls.base}/${urls.auth.user}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: getAccessToken(),
    },
    body: JSON.stringify({ name, email, password }),
  }).then(responseOrError);
};

export const refreshToken = () => {
  return fetch(`${urls.base}/${urls.auth.token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: getRefreshToken(),
    }),
  }).then(responseOrError);
};

export const logout = () => {
  return fetch(`${urls.base}/${urls.auth.logout}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: getRefreshToken(),
    }),
  }).then(responseOrError);
};

const getAccessToken = (): string => {
  const item = localStorage.getItem(TokenIdentifiers.ACCESS);
  if (item == null) {
    return "";
  }

  return item;
};

const getRefreshToken = (): string => {
  const item = localStorage.getItem(TokenIdentifiers.REFRESH);
  if (item == null) {
    return "";
  }

  return item;
};

const responseOrError = (res: Response) => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((err) => {
      throw err;
    });
  }
};
