import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginView from "./Views/LoginView";
import { ILoginProps } from "./types";
import useLogin from "../../hooks/mutation/auth/useLogin";

const Login = () => {
  const navigate = useNavigate();
  const { mutate: loginMutate } = useLogin(navigate);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginProps: ILoginProps = {
    email,
    password,
    onEmailChange: (e) => {
      setEmail(e.target.value);
    },
    onPasswordChange: (e) => {
      setPassword(e.target.value);
    },
    onLogin: () => loginMutate({ email, password }),
    onGoToSignUp: () => navigate("sign-up"),
  };

  return <LoginView {...loginProps} />;
};

export default Login;
