import { AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "react-query";

import ToDoAPI from "../../../api/toDo";
import { TNavigate } from "../../../types/navigate";
import { IToDoForm, IToDoByIdResponse } from "../../../types/toDo";

const usePostToDo = (navigate: TNavigate) => {
  const queryClient = useQueryClient();

  return useMutation((data: IToDoForm) => ToDoAPI.createToDo(data), {
    onSuccess: (data: AxiosResponse<IToDoByIdResponse>) => {
      navigate(`/todos/${data.data.data.id}`);
      queryClient.invalidateQueries(["getToDos"]);
    },
  });
};

export default usePostToDo;
