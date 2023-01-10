import React from "react";
import { IChildrenProps } from "../../types/children";
import { IToDoData, IToDoFormAndId } from "../../types/toDo";

export interface IToDoLayoutProps extends IChildrenProps {
  onOpenModal: () => void;
  onCloseModal: () => void;
  open: boolean;
  isHomePage: boolean;
}

export interface IToDoListProps {
  isLoading: boolean;
  toDoList: IToDoData[] | undefined;
  selectedId: string | undefined;
  onPutToDo: () => void;
  onDeleteToDo: (id: string) => void;
  onGoToDetail: (id: string) => void;
}

export interface IToDoDetailProps {
  onPutToDo: (data: IToDoFormAndId) => void;
  onEditMode: (toDodata?: IToDoData) => void;
  onDeleteToDo: (id: string | undefined) => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toDoData: IToDoData | undefined;
  editMode: boolean;
  editData: { title: string; content: string };
  isEmptyData: boolean;
}

export interface IModalState {
  onClose: () => void;
  open: boolean;
}

export interface IAddToDoModalProps {
  onCloseModal: () => void;
  onAddToDo: () => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  open: boolean;
  headerTitle: string;
  btnName: { close: string; confirm: string };
  toDoData: { title: string; content: string };
}
