import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useSignUp from "../../hooks/mutation/auth/useSignUp";
import { emailValidator, passwordValidator } from "../../utils/validator";
import { ISignUpProps } from "./types";
import SignUpView from "./Views/SignUpView";

const SignUp = () => {
  const navigate = useNavigate();
  const { mutate: signUpMutate } = useSignUp(navigate);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validData, setValidData] = useState({
    isEmailValid: false,
    isPasswordValid: false,
  });
  const isNotEnterEmail = email.length === 0;
  const isNotEnterPassword = password.length === 0;

  const signUpProps: ISignUpProps = {
    onEmailChange: (e) => {
      emailValidator(e.target.value)
        ? setValidData((p) => ({ ...p, isEmailValid: true }))
        : setValidData((p) => ({ ...p, isEmailValid: false }));
      setEmail(e.target.value);
    },
    onPasswordChange: (e) => {
      passwordValidator(e.target.value)
        ? setValidData((p) => ({ ...p, isPasswordValid: true }))
        : setValidData((p) => ({ ...p, isPasswordValid: false }));
      setPassword(e.target.value);
    },
    onSignUp: () => signUpMutate({ email, password }),
    email,
    password,
    validData,
    isNotEnterEmail,
    isNotEnterPassword,
  };

  return <SignUpView {...signUpProps} />;
};

export default SignUp;
