import { useMutation, useQueryClient } from "react-query";

import ToDoAPI from "../../../api/toDo";
import useToastMessage from "../../common/useToastMessage";

const useDeleteToDo = () => {
  const queryClient = useQueryClient();
  const showToast = useToastMessage();

  return useMutation((id: string | undefined) => ToDoAPI.deleteToDo(id), {
    onError: () => {
      showToast("error", "삭제에 실패했습니다.");
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["getToDos"]);
    },
  });
};

export default useDeleteToDo;
