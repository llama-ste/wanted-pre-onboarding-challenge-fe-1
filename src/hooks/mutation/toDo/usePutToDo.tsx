import { useMutation, useQueryClient } from "react-query";

import ToDoAPI from "../../../api/toDo";
import { IToDoFormAndId } from "../../../types/toDo";

const usePutToDo = () => {
  const queryClient = useQueryClient();

  return useMutation((data: IToDoFormAndId) => ToDoAPI.updateToDo(data), {
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(["getToDos"]);
      queryClient.invalidateQueries(["getToDoById", id]);
    },
  });
};

export default usePutToDo;
