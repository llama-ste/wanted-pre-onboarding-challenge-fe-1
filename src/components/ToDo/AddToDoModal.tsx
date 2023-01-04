import { useState } from "react";
import { useNavigate } from "react-router-dom";

import usePostToDo from "../../hooks/mutation/toDo/usePostToDo";
import { IAddToDoModalProps, IModalState } from "./types";
import AddToDoModalView from "./Views/AddToDoModalView";

const AddToDoModal = ({ onClose, open }: IModalState) => {
  const navigate = useNavigate();
  const [toDoData, setToDoData] = useState({
    title: "",
    content: "",
  });
  const { mutate: postToDoMutate } = usePostToDo(navigate);

  const AddToDoModalProps: IAddToDoModalProps = {
    onCloseModal: () => {
      onClose();
      setToDoData({ title: "", content: "" });
    },
    onAddToDo: () => {
      postToDoMutate(toDoData);
      onClose();
      setToDoData({ title: "", content: "" });
    },
    onChangeTitle: (e) => setToDoData((p) => ({ ...p, title: e.target.value })),
    onChangeContent: (e) =>
      setToDoData((p) => ({ ...p, content: e.target.value })),
    open,
    headerTitle: "New ToDo",
    btnName: { close: "닫기", confirm: "추가" },
    toDoData,
  };

  return <AddToDoModalView {...AddToDoModalProps} />;
};

export default AddToDoModal;
