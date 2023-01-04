import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import ToDoAPI from "../../../api/toDo";
import { IToDosResponse } from "../../../types/toDo";
import useToastMessage from "../../common/useToastMessage";

const useGetToDos = () => {
  const showToast = useToastMessage();

  return useQuery(["getToDos"], () => ToDoAPI.getToDos(), {
    onError: () => {
      showToast("error", "불러오기에 실패했습니다.");
    },
    select: (data: AxiosResponse<IToDosResponse>) => {
      return data.data.data;
    },
  });
};

export default useGetToDos;
