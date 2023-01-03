import client from "./client";
import { IUserInfo } from "../types/auth";

const AuthAPI = {
  signUp: (data: IUserInfo) => {
    return client.post("/users/create", data);
  },
  login: (data: IUserInfo) => {
    return client.post("/users/login", data);
  },
};

export default AuthAPI;
