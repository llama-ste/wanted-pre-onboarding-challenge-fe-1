import styled from "@emotion/styled";
import { TextField, Button, Typography } from "@mui/material";

import { ISignUpProps } from "../types";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  gap: 20px;
`;

const SignUpView = ({
  onEmailChange,
  onPasswordChange,
  onSignUp,
  email,
  password,
  validData,
  isNotEnterEmail,
  isNotEnterPassword,
}: ISignUpProps) => {
  return (
    <Container>
      <Typography textAlign="center" variant="h4">
        회원가입
      </Typography>
      <TextField
        label="Email"
        value={email}
        onChange={onEmailChange}
        error={isNotEnterEmail ? false : !validData.isEmailValid}
        helperText={
          isNotEnterEmail || validData.isEmailValid
            ? ""
            : "이메일 형식에 맞게 입력해주세요."
        }
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={onPasswordChange}
        error={isNotEnterPassword ? false : !validData.isPasswordValid}
        helperText={
          isNotEnterPassword || validData.isPasswordValid
            ? ""
            : "비밀번호는 8자리 이상이어야 합니다."
        }
      />
      <Button
        disabled={
          isNotEnterEmail || isNotEnterPassword
            ? true
            : !(validData.isEmailValid && validData.isPasswordValid)
        }
        onClick={onSignUp}
        size="large"
        variant="contained"
      >
        완료
      </Button>
    </Container>
  );
};

export default SignUpView;
