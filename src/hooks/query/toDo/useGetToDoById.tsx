import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import ToDoAPI from "../../../api/toDo";
import { TToDoByIdResponse } from "../../../types/toDo";
import useToastMessage from "../../common/useToastMessage";

const useGetToDoById = (id: string | undefined) => {
  const showToast = useToastMessage();

  return useQuery(["getToDoById", id], () => ToDoAPI.getToDoById(id), {
    onError: () => {
      showToast("error", "불러오기에 실패했습니다.");
    },
    select: (data: AxiosResponse<TToDoByIdResponse>) => {
      return data.data.data;
    },
  });
};

export default useGetToDoById;
