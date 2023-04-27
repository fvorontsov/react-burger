import { TUrls } from "../types";

export const urls: TUrls = {
  base: `https://norma.nomoreparties.space/api`,
  general: {
    ingredients: "ingredients",
    orders: "orders",
  },
  auth: {
    login: "auth/login",
    register: "auth/register",
    logout: "auth/logout",
    token: "auth/token",
    user: "auth/user",
  },
  passWordReset: {
    forgot: "password-reset",
    reset: "password-reset/reset",
  },
};
