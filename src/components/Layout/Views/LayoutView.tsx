import styled from "@emotion/styled";

import { flexCenter } from "../../../styles/flex";
import Header from "../Header";
import { ILayoutProps } from "../types";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
`;

const Content = styled.div`
  ${flexCenter}
  width: 100%;
  max-width: 1000px;
  padding: 0px 15px;
`;

const LayoutView = ({ children, isNotAuthPage }: ILayoutProps) => {
  return (
    <Container>
      {isNotAuthPage && <Header />}
      <Content>{children}</Content>
    </Container>
  );
};

export default LayoutView;
