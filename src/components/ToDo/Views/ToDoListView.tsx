import { List, ListItemButton, ListSubheader, Typography } from "@mui/material";
import LoadingBar from "../../Common/LoadingBar";
import { IToDoListProps } from "../types";

const ToDoListView = ({
  onPutToDo,
  onDeleteToDo,
  onGoToDetail,
  isLoading,
  toDoList,
  selectedId,
}: IToDoListProps) => {
  if (isLoading) return <LoadingBar isLoading={isLoading} />;

  return (
    <List component="nav" subheader={<ListSubheader>ToDos</ListSubheader>}>
      {toDoList?.map((toDo) => {
        return (
          <ListItemButton
            selected={toDo.id === selectedId}
            onClick={() => onGoToDetail(toDo.id)}
            key={toDo.id}
          >
            <Typography>{toDo.title}</Typography>
          </ListItemButton>
        );
      })}
    </List>
  );
};

export default ToDoListView;
