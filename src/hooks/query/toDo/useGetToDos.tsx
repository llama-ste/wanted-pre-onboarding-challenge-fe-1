import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import ToDoAPI from "../../../api/toDo";
import { IToDosResponse } from "../../../types/toDo";

const useGetToDos = () => {
  return useQuery(["getToDos"], () => ToDoAPI.getToDos(), {
    select: (data: AxiosResponse<IToDosResponse>) => {
      return data.data.data;
    },
  });
};

export default useGetToDos;
