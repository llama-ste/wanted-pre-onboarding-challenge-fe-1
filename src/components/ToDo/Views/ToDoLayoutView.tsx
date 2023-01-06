import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Empty from "../../Common/Empty";
import AddToDoModal from "../AddToDoModal";
import ToDoList from "../ToDoList";
import { IToDoLayoutProps } from "../types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  Button {
    font-weight: bold;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-top: 15px;
`;

const ToDoLayoutView = ({
  onOpenModal,
  onCloseModal,
  open,
  children,
  isHomePage,
}: IToDoLayoutProps) => {
  return (
    <Container>
      <BtnWrapper>
        <Button onClick={onOpenModal} variant="contained">
          NEW
        </Button>
      </BtnWrapper>
      <ContentWrapper>
        <ToDoList />
        {isHomePage && (
          <Empty text="Todo를 추가하거나 왼쪽 탭을 이용하여 상세페이지에 들어가보세요." />
        )}
        {children}
      </ContentWrapper>
      <AddToDoModal open={open} onClose={onCloseModal} />
    </Container>
  );
};

export default ToDoLayoutView;
