import { useMutation, useQueryClient } from "react-query";

import ToDoAPI from "../../../api/toDo";
import { IToDoFormAndId } from "../../../types/toDo";
import useToastMessage from "../../common/useToastMessage";

const usePutToDo = () => {
  const queryClient = useQueryClient();
  const showToast = useToastMessage();

  return useMutation((data: IToDoFormAndId) => ToDoAPI.updateToDo(data), {
    onError: () => {
      showToast("error", "수정에 실패했습니다.");
    },
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(["getToDos"]);
      queryClient.invalidateQueries(["getToDoById", id]);
    },
  });
};

export default usePutToDo;
