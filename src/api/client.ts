import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { IError } from "../types/axios";
import { toast } from "react-toastify";
import customHistory from "../utils/history";

const baseURL: string = process.env.REACT_APP_BASE_URL as string;

const client = axios.create({ baseURL });

client.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers = {};
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

client.interceptors.response.use(
  (res: AxiosResponse) => res,
  (error: AxiosError<IError>) => {
    const isTokenMissing = error.response?.data.details === "Token is missing";

    if (isTokenMissing) {
      toast.warning("로그인을 해주세요.");
      customHistory.replace("/auth");
    }
  }
);

export default client;
