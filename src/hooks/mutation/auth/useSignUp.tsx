import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";

import AuthAPI from "../../../api/auth";
import { IAuthResponse, IUserInfo } from "../../../types/auth";
import { TNavigate } from "../../../types/navigate";

const useSignUp = (navigate: TNavigate) => {
  return useMutation((userInfo: IUserInfo) => AuthAPI.signUp(userInfo), {
    onSuccess: (data: AxiosResponse<IAuthResponse>) => {
      const token = data.data.token;
      localStorage.setItem("token", token);
      navigate("/todos", { replace: true });
    },
  });
};

export default useSignUp;
