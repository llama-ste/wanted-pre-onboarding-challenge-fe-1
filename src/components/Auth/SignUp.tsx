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

  const signUpProps: ISignUpProps = {
    email,
    password,
    onEmailChange: (e) => {
      if (emailValidator(e.target.value)) {
        setValidData((p) => ({ ...p, isEmailValid: true }));
      } else {
        setValidData((p) => ({ ...p, isEmailValid: false }));
      }
      setEmail(e.target.value);
    },
    onPasswordChange: (e) => {
      if (passwordValidator(e.target.value)) {
        setValidData((p) => ({ ...p, isPasswordValid: true }));
      } else {
        setValidData((p) => ({ ...p, isPasswordValid: false }));
      }
      setPassword(e.target.value);
    },
    onSignUp: () => signUpMutate({ email, password }),
    validData,
    isValid: validData.isEmailValid && validData.isPasswordValid,
  };

  return <SignUpView {...signUpProps} />;
};

export default SignUp;
