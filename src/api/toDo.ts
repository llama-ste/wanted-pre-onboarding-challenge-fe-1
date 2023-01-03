import { IToDoForm } from "../types/toDo";
import client from "./client";

const ToDoAPI = {
  getTodos: () => {
    return client.get("/todos");
  },
  getTodoById: (id: string) => {
    return client.get(`/todos/${id}`);
  },
  createTodo: (data: IToDoForm) => {
    return client.post("/todos", data);
  },
  updateTodo: (id: string, data: IToDoForm) => {
    return client.put(`/todos/${id}`, data);
  },
  deleteTodo: (id: string) => {
    return client.delete(`/todos/${id}`);
  },
};

export default ToDoAPI;
