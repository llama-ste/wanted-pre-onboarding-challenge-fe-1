import styled from "@emotion/styled";
import { TextField, Button, Typography } from "@mui/material";

import { ILoginProps } from "../types";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 300px;
  gap: 20px;
`;

const UnderLineTypography = styled(Typography)`
  text-decoration: underline;

  :hover {
    cursor: pointer;
  }
`;

const LoginView = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onLogin,
  onGoToSignUp,
}: ILoginProps) => {
  return (
    <Container>
      <Typography textAlign="center" variant="h4">
        로그인
      </Typography>
      <TextField label="Email" value={email} onChange={onEmailChange} />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={onPasswordChange}
      />
      <Button onClick={onLogin} size="large" variant="contained">
        로그인
      </Button>
      <Typography textAlign="center" variant="caption">
        아이디가 없으신가요?{" "}
        <UnderLineTypography onClick={onGoToSignUp} variant="button">
          회원가입
        </UnderLineTypography>
      </Typography>
    </Container>
  );
};

export default LoginView;
