import { Button, TextField } from "@mui/material";

import Modal from "../../Common/Modal";
import { IAddToDoModalProps } from "../types";

const AddToDoModalView = ({
  onCloseModal,
  onAddToDo,
  onChangeTitle,
  onChangeContent,
  open,
  headerTitle,
  btnName,
  toDoData,
}: IAddToDoModalProps) => {
  return (
    <Modal
      onClose={onCloseModal}
      open={open}
      headerTitle={headerTitle}
      footer={
        <>
          <Button onClick={onCloseModal} color="inherit" variant="outlined">
            {btnName.close}
          </Button>
          <Button onClick={onAddToDo} variant="outlined">
            {btnName.confirm}
          </Button>
        </>
      }
    >
      <TextField
        onChange={onChangeTitle}
        value={toDoData.title}
        label="Title"
      />
      <TextField
        onChange={onChangeContent}
        value={toDoData.content}
        label="Content"
        multiline
        minRows={5}
      />
    </Modal>
  );
};

export default AddToDoModalView;
