import styled from "@emotion/styled";
import { Button, Paper, TextField, Typography } from "@mui/material";
import Empty from "../../Common/Empty";
import { IToDoDetailProps } from "../types";

const Wrapper = styled.div`
  padding: 10px 0px 0px 30px;
`;

const StyledPaper = styled(Paper)`
  display: flex;
  min-height: 20vh;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const ToDoDetailView = ({
  onEditMode,
  onPutToDo,
  onDeleteToDo,
  onChangeTitle,
  onChangeContent,
  toDoData,
  editMode,
  editData,
  isEmptyData,
}: IToDoDetailProps) => {
  if (isEmptyData) return <Empty text="존재하지 않는 ToDo입니다." />;

  return (
    <Wrapper>
      <StyledPaper>
        <ContentWrapper>
          {editMode ? (
            <>
              <TextField
                label="Title"
                onChange={onChangeTitle}
                value={editData.title}
              />
              <TextField
                label="Content"
                onChange={onChangeContent}
                value={editData.content}
              />
            </>
          ) : (
            <>
              <Typography fontWeight="bold" variant="h6">
                {toDoData?.title}
              </Typography>
              <Typography variant="subtitle1">{toDoData?.content}</Typography>
            </>
          )}
        </ContentWrapper>
        <FooterWrapper>
          <Button
            onClick={() =>
              editMode ? onEditMode() : onDeleteToDo(toDoData?.id)
            }
            variant="outlined"
            size="small"
            color="error"
          >
            {editMode ? "취소" : "삭제"}
          </Button>
          <Button
            onClick={() =>
              editMode
                ? onPutToDo({ id: toDoData?.id, data: editData })
                : onEditMode(toDoData)
            }
            variant="outlined"
            size="small"
          >
            {editMode ? "완료" : "수정"}
          </Button>
        </FooterWrapper>
      </StyledPaper>
    </Wrapper>
  );
};

export default ToDoDetailView;
