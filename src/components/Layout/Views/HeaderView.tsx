import styled from "@emotion/styled";
import { Typography, Button } from "@mui/material";

import { flexCenter } from "../../../styles/flex";
import { IHeaderProps } from "../types";

const Container = styled.div`
  ${flexCenter}
  position: fixed;
  top: 0px;
  z-index: 1000;
  width: 100%;
  height: 80px;
  box-shadow: 0 2px 5px rgba(130, 130, 130, 0.1);
  background-color: white;
`;

const Wrapper = styled.div`
  ${flexCenter}
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  padding: 20px 15px;
`;

const Logo = styled(Typography)`
  &:hover {
    cursor: pointer;
  }
  font-weight: bold;
`;

const HeaderView = ({ onGoToHome, onLogout, hasToken }: IHeaderProps) => {
  return (
    <Container>
      <Wrapper>
        <Logo onClick={onGoToHome} variant="h5">
          ToDos
        </Logo>
        <Button onClick={onLogout}>{hasToken ? "로그아웃" : "로그인"}</Button>
      </Wrapper>
    </Container>
  );
};

export default HeaderView;
