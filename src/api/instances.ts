import axios from "axios";
import { TokenIdentifiers } from "../utils/constants";

export const req = axios.create({
  baseURL: "https://norma.nomoreparties.space/api",
  timeout: 20000,
  timeoutErrorMessage: "Request timeout",
  responseType: "json",
});

if (req) {
  req.interceptors.request.use((config) => {
    const token = localStorage.getItem(TokenIdentifiers.ACCESS);
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  });
}
