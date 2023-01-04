export interface IToDoData {
  title: string;
  content: string;
  id: string;
  createAt: string;
  updatedAt: string;
}

export interface IToDoByIdResponse {
  data: IToDoData;
}
export interface IToDosResponse {
  data: IToDoData[];
}

export interface IToDoForm {
  title: string;
  content: string;
}

export interface IToDoFormAndId {
  id: string | undefined;
  data: IToDoForm;
}
