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
  email,
  password,
  validData,
  isValid,
  onEmailChange,
  onPasswordChange,
  onSignUp,
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
        error={!validData.isEmailValid}
        helperText={
          validData.isEmailValid ? "" : "이메일 형식에 맞게 입력해주세요."
        }
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={onPasswordChange}
        error={!validData.isPasswordValid}
        helperText={
          validData.isPasswordValid ? "" : "비밀번호는 8자리 이상이어야 합니다."
        }
      />
      <Button
        disabled={!isValid}
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
