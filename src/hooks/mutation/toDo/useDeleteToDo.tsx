import { useMutation, useQueryClient } from "react-query";

import ToDoAPI from "../../../api/toDo";

const useDeleteToDo = () => {
  const queryClient = useQueryClient();

  return useMutation((id: string | undefined) => ToDoAPI.deleteToDo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getToDos"]);
    },
  });
};

export default useDeleteToDo;
