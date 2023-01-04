import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useDeleteToDo from "../../hooks/mutation/toDo/useDeleteToDo";
import usePutToDo from "../../hooks/mutation/toDo/usePutToDo";
import useGetToDoById from "../../hooks/query/toDo/useGetToDoById";
import { IToDoDetailProps } from "./types";
import ToDoDetailView from "./Views/ToDoDetailView";

const ToDoDetail = () => {
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({ title: "", content: "" });
  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { data, isLoading } = useGetToDoById(params?.id);
  const { mutate: putToDoMutate } = usePutToDo();
  const { mutate: deleteToDoMutate } = useDeleteToDo();

  useEffect(() => {
    setEditMode(false);
    setEditData({ title: "", content: "" });
  }, [pathname]);

  const ToDoDetailProps: IToDoDetailProps = {
    onEditMode: (toDodata) => {
      if (toDodata) {
        setEditData({ title: toDodata.title, content: toDodata.content });
      }
      setEditMode((p) => !p);
    },
    onPutToDo: (data) => {
      putToDoMutate(data);
      setEditMode(false);
      setEditData({ title: "", content: "" });
    },
    onDeleteToDo: (id) => {
      deleteToDoMutate(id);
      navigate("/todos", { replace: true });
    },
    onChangeTitle: (e) => setEditData((p) => ({ ...p, title: e.target.value })),
    onChangeContent: (e) => {
      setEditData((p) => ({ ...p, content: e.target.value }));
    },
    toDoData: data,
    editMode,
    editData,
    isEmptyData: data === undefined,
  };

  return isLoading ? <></> : <ToDoDetailView {...ToDoDetailProps} />;
};

export default ToDoDetail;
