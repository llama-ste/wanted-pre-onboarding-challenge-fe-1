import { IUserInfo } from "../../types/auth";

interface IAuthForm extends IUserInfo {
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ILoginProps extends IAuthForm {
  onLogin: () => void;
  onGoToSignUp: () => void;
}

export interface ISignUpProps extends IAuthForm {
  onSignUp: () => void;
  validData: { isEmailValid: boolean; isPasswordValid: boolean };
  isValid: boolean;
}
