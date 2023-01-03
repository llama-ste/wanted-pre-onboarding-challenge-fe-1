import axios, { AxiosRequestConfig } from "axios";

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

export default client;
