import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import ToDoAPI from "../../../api/toDo";
import { IToDoByIdResponse } from "../../../types/toDo";

const useGetToDoById = (id: string | undefined) => {
  return useQuery(["getToDoById", id], () => ToDoAPI.getToDoById(id), {
    select: (data: AxiosResponse<IToDoByIdResponse>) => {
      return data.data.data;
    },
  });
};

export default useGetToDoById;
