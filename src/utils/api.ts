import { Method } from "axios";
import { TLoginData, TUser, TUserWithPassword } from "../types/user";
import { TCountedIngredient } from "../types";
import { TOrder } from "../types/order";
import { TokenIdentifiers } from "./constants";
import { req } from "../api/instances";
import {
  TIngredientsResponse,
  TMakeOrderResponse,
  TOrdersResponse,
  TResponse,
  TTokensResponse,
  TUserResponse,
} from "../api/responses";
import { urls } from "./urls";
import { APIError } from "../api/errors";

const request = async <T extends TResponse>(
  method: Method,
  url: string,
  data?: unknown
): Promise<T> => {
  try {
    const axiosResponse = await req.request<T>({ method, url, data });
    const response = axiosResponse.data;
    return response.success
      ? response
      : Promise.reject(new APIError(response.message));
  } catch (error) {
    console.log(error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return Promise.reject(new APIError(message));
  }
};

function saveTokens(accessToken: string, refreshToken: string): void {
  localStorage.setItem(TokenIdentifiers.ACCESS, accessToken);
  localStorage.setItem(TokenIdentifiers.REFRESH, refreshToken);
}

export const get = async <T extends TResponse>(url: string): Promise<T> => {
  return request<T>("GET", url);
};

export const post = async <T extends TResponse>(
  url: string,
  data?: unknown
): Promise<T> => {
  return request<T>("POST", url, data);
};

export const register = async (user: TUserWithPassword): Promise<TUser> => {
  const response = await post<TTokensResponse>(urls.auth.register, user);
  saveTokens(response.accessToken, response.refreshToken);
  return response.user;
};

export const login = async (user: TLoginData): Promise<TUser> => {
  const response = await post<TTokensResponse>(urls.auth.login, user);
  saveTokens(response.accessToken, response.refreshToken);
  return response.user;
};

export const logout = async (): Promise<TResponse> => {
  const token = localStorage.getItem(TokenIdentifiers.REFRESH);
  return token
    ? post<TResponse>(urls.auth.logout, { token }).then((response) => {
        localStorage.removeItem(TokenIdentifiers.ACCESS);
        localStorage.removeItem(TokenIdentifiers.REFRESH);
        return response;
      })
    : Promise.reject(new APIError("No refresh token"));
};

export const resetPassword = async (email: string): Promise<TResponse> => {
  const response = await post<TResponse>(urls.passWordReset.forgot, { email });
  return response.success
    ? Promise.resolve(response)
    : Promise.reject(response.message || "Can't reset password");
};

export const forgotPassword = async (
  password: string,
  token: string
): Promise<TResponse> => {
  const response = await post<TResponse>(urls.passWordReset.reset, {
    password,
    token,
  });
  return response.success
    ? Promise.resolve(response)
    : Promise.reject(response.message || "Can't reset password");
};

const refreshToken = async (): Promise<TTokensResponse> => {
  const token = localStorage.getItem(TokenIdentifiers.REFRESH);
  return token
    ? post<TTokensResponse>(urls.auth.token, { token })
    : Promise.reject(new APIError("There is no refresh token"));
};

export const requestWithAuth = async <T extends TResponse>(
  method: Method,
  url: string,
  requestData?: object,
  attempts = 0
): Promise<T> => {
  if (attempts >= 2) {
    return Promise.reject(new APIError("Can't fetch data"));
  }

  try {
    return await request<T>(method, url, requestData);
  } catch (error) {
    if (error instanceof APIError && error.message === "jwt expired") {
      const newTokenData = await refreshToken();
      if (newTokenData.success) {
        saveTokens(newTokenData.accessToken, newTokenData.refreshToken);
        return requestWithAuth<T>(method, url, requestData, attempts + 1);
      }
    }
    return Promise.reject(error);
  }
};

export const fetchIngredients = async (): Promise<
  Array<TCountedIngredient>
> => {
  const response = await get<TIngredientsResponse>(urls.general.ingredients);
  return response.data;
};

export const getOrder = async (orderNumber: string): Promise<Array<TOrder>> => {
  const response = await get<TOrdersResponse>(
    `${urls.general.orders}/${orderNumber}`
  );
  return response.orders;
};

export const getUserProfile = async (): Promise<TUser> => {
  const response = await requestWithAuth<TUserResponse>("GET", urls.auth.user);
  return response.success
    ? Promise.resolve(response.user)
    : Promise.reject(new APIError(response.message));
};

export const updateUserProfile = async (profile: TUser): Promise<TUser> => {
  const response = await requestWithAuth<TUserResponse>(
    "PATCH",
    urls.auth.user,
    profile
  );
  return response.success
    ? Promise.resolve(response.user)
    : Promise.reject(new APIError(response.message));
};
export const makeOrder = async (
  ingredients: Array<string>
): Promise<string> => {
  const response = await requestWithAuth<TMakeOrderResponse>(
    "POST",
    urls.general.orders,
    { ingredients }
  );
  return response.success
    ? Promise.resolve(response.order.number)
    : Promise.reject(new APIError(response.message));
};
