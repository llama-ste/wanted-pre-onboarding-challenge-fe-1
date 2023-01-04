import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IChildrenProps } from "../../types/children";
import { IToDoLayoutProps } from "./types";
import ToDoLayoutView from "./Views/ToDoLayoutView";

const ToDoLayout = ({ children }: IChildrenProps) => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const isHomePage = pathname === "/todos";

  const ToDoLayoutProps: IToDoLayoutProps = {
    onOpenModal: () => setOpen(true),
    onCloseModal: () => setOpen(false),
    open,
    children,
    isHomePage,
  };

  return <ToDoLayoutView {...ToDoLayoutProps} />;
};

export default ToDoLayout;
