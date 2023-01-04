import { IToDoForm, IToDoFormAndId } from "../types/toDo";
import client from "./client";

const ToDoAPI = {
  getToDos: () => {
    return client.get("/todos");
  },
  getToDoById: (id: string | undefined) => {
    return client.get(`/todos/${id}`);
  },
  createToDo: (data: IToDoForm) => {
    return client.post("/todos", data);
  },
  updateToDo: ({ id, data }: IToDoFormAndId) => {
    return client.put(`/todos/${id}`, data);
  },
  deleteToDo: (id: string | undefined) => {
    return client.delete(`/todos/${id}`);
  },
};

export default ToDoAPI;
