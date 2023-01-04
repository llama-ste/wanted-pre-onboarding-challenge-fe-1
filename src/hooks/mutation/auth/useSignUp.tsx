import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";

import AuthAPI from "../../../api/auth";
import { IAuthResponse, IUserInfo } from "../../../types/auth";
import { IError } from "../../../types/axios";
import { TNavigate } from "../../../types/navigate";
import useToastMessage from "../../common/useToastMessage";

const useSignUp = (navigate: TNavigate) => {
  const showToast = useToastMessage();

  return useMutation((userInfo: IUserInfo) => AuthAPI.signUp(userInfo), {
    onError: (error: AxiosError<IError>) => {
      if (error.response) {
        showToast("error", error.response.data.details);
      }
    },
    onSuccess: (data: AxiosResponse<IAuthResponse>) => {
      const token = data.data.token;
      localStorage.setItem("token", token);
      navigate("/todos", { replace: true });
    },
  });
};

export default useSignUp;
