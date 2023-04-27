import { TInput, TString } from "../types";

export const IngredientType: TString = {
  BUN: "bun",
  SAUCE: "sauce",
  MAIN: "main",
};

export const BunType: TString = {
  TOP: "top",
  BOTTOM: "bottom",
};

export const ItemTypes: TString = {
  INGREDIENT_CARD: "INGREDIENT_CARD",
  CONSTRUCTOR_CARD: "CONSTRUCTOR_CARD",
};

export const Inputs: TInput = {
  Types: {
    EMAIL: "email",
    TEXT: "text",
    PASSWORD: "password",
  },
  Names: {
    EMAIL: "email",
    NAME: "name",
    PASSWORD: "password",
    CODE: "token",
  },
  Placeholders: {
    EMAIL: "E-mail",
    PASSWORD: "Пароль",
    NAME: "Имя",
    RESTORE: "Укажите e-mail",
    NEW_PASS: "Введите новый пароль",
    CODE: "Введите код из письма",
  },
};

export const TokenIdentifiers: TString = {
  REFRESH: "refreshToken",
  ACCESS: "accessToken",
};

export const Errors: TString = {
  JWT_EXPIRED: "jwt expired",
};

export const Paths: TString = {
  REGISTER: "/register",
  LOGIN: "/login",
  HOME: "/",
  PROFILE: "/profile",
  PROFILE_ORDERS: "/profile/orders",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  ORDERS: "/orders",
  INGREDIENT: "/ingredients/:id",
  INGREDIENTS: "/ingredients",
};
