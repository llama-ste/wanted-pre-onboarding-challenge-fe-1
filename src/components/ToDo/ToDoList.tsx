import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useDeleteToDo from "../../hooks/mutation/toDo/useDeleteToDo";
import usePutToDo from "../../hooks/mutation/toDo/usePutToDo";
import useGetToDos from "../../hooks/query/toDo/useGetToDos";
import { IToDoListProps } from "./types";
import ToDoListView from "./Views/ToDoListView";

const ToDoList = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [selectedId, setSelectedId] = useState("");
  const { data, isLoading } = useGetToDos();
  const { mutate: putToDoMutate } = usePutToDo();
  const { mutate: deleteToDoMutate } = useDeleteToDo();

  useEffect(() => {
    const isHomePage = pathname === "/todos";

    if (isHomePage) {
      setSelectedId("");
    } else {
      const id = pathname.replace("/todos/", "");
      setSelectedId(id);
    }
  }, [pathname]);

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
