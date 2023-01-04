import { AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "react-query";

import ToDoAPI from "../../../api/toDo";
import { TNavigate } from "../../../types/navigate";
import { IToDoForm, IToDoByIdResponse } from "../../../types/toDo";
import useToastMessage from "../../common/useToastMessage";

const usePostToDo = (navigate: TNavigate) => {
  const queryClient = useQueryClient();
  const showToast = useToastMessage();

  return useMutation((data: IToDoForm) => ToDoAPI.createToDo(data), {
    onError: () => {
      showToast("error", "저장에 실패했습니다.");
    },
    onSuccess: (data: AxiosResponse<IToDoByIdResponse>) => {
      navigate(`/todos/${data.data.data.id}`);
      queryClient.invalidateQueries(["getToDos"]);
    },
  });
};

export default usePostToDo;
