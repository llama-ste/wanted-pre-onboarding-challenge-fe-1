import { Outlet } from "react-router-dom";
import ToDoLayout from "../components/ToDo/ToDoLayout";

const Home = () => {
  return (
    <ToDoLayout>
      <Outlet />
    </ToDoLayout>
  );
};

export default Home;
