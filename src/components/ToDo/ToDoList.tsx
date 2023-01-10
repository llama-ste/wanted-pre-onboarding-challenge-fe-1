import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useDeleteToDo from "../../hooks/mutation/toDo/useDeleteToDo";
import usePutToDo from "../../hooks/mutation/toDo/usePutToDo";
import useGetToDos from "../../hooks/query/toDo/useGetToDos";
import { IToDoListProps } from "./types";
import ToDoListView from "./Views/ToDoListView";

const ToDoList = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [selectedId, setSelectedId] = useState<undefined | string>("");
  const { data, isLoading } = useGetToDos();
  const { mutate: putToDoMutate } = usePutToDo();
  const { mutate: deleteToDoMutate } = useDeleteToDo();

  useEffect(() => {
    const hasId = !!params?.id;

    if (hasId) {
      setSelectedId(params?.id);
    } else {
      setSelectedId("");
    }
  }, [params]);

  const ToDoListProps: IToDoListProps = {
    onPutToDo: () => putToDoMutate,
    onDeleteToDo: (id) => deleteToDoMutate(id),
    onGoToDetail: (id) => {
      setSelectedId(id);
      navigate(`/todos/${id}`);
    },
    isLoading,
    toDoList: data,
    selectedId,
  };

  return <ToDoListView {...ToDoListProps} />;
};

export default ToDoList;
