import { urls } from "./urls";
import { TokenIdentifiers } from "./constants";

export const fetchIngredients = () => {
  return fetch(`${urls.base}/${urls.general.ingredients}`, {
    method: "GET",
  }).then(responseOrError);
};

export const makeOrder = ({ ingredientIds }) => {
  return fetch(`${urls.base}/${urls.general.orders}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem(TokenIdentifiers.ACCESS),
    },
    body: JSON.stringify({ ingredients: ingredientIds }),
  }).then(responseOrError);
};

export const login = ({ email, password }) => {
  return fetch(`${urls.base}/${urls.auth.login}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(responseOrError);
};

export const register = ({ name, email, password }) => {
  return fetch(`${urls.base}/${urls.auth.register}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(responseOrError);
};

export const forgotPassword = ({ email }) => {
  return fetch(`${urls.base}/${urls.passWordReset.forgot}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  }).then(responseOrError);
};

export const resetPassword = ({ token, password }) => {
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
      Authorization: localStorage.getItem(TokenIdentifiers.ACCESS),
    },
  }).then(responseOrError);
};

export const updateUser = ({ name, email, password }) => {
  return fetch(`${urls.base}/${urls.auth.user}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem(TokenIdentifiers.ACCESS),
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
    body: JSON.stringify({ token: localStorage.getItem(TokenIdentifiers.REFRESH) }),
  }).then(responseOrError);
};

export const logout = () => {
  return fetch(`${urls.base}/${urls.auth.logout}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: localStorage.getItem(TokenIdentifiers.REFRESH) }),
  }).then(responseOrError);
};
const responseOrError = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((err) => {
      const error = new Error(err.message);
      error.status = res.status;
      throw error;
    });
  }
};
