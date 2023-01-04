import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import ToDoAPI from "../../../api/toDo";
import { TToDosResponse } from "../../../types/toDo";
import useToastMessage from "../../common/useToastMessage";

const useGetToDos = () => {
  const showToast = useToastMessage();

  return useQuery(["getToDos"], () => ToDoAPI.getToDos(), {
    onError: () => {
      showToast("error", "불러오기에 실패했습니다.");
    },
    select: (data: AxiosResponse<TToDosResponse>) => {
      return data.data.data;
    },
  });
};

export default useGetToDos;
