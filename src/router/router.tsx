import { Routes, Route } from "react-router-dom";
import AuthValidator from "../components/Common/AuthValidator";
import Empty from "../components/Common/Empty";
import Auth from "../pages/auth/Auth";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages/Home";
import ToDoDetail from "../pages/toDo/ToDoDetail";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/todos"
        element={
          <AuthValidator>
            <Home />
          </AuthValidator>
        }
      >
        <Route path=":id" element={<ToDoDetail />} />
      </Route>
      <Route
        path="/auth"
        element={
          <AuthValidator>
            <Auth />
          </AuthValidator>
        }
      >
        <Route path="sign-up" element={<SignUp />} />
      </Route>
      <Route
        path="*"
        element={
          <Empty containerHeight="90vh" text="존재하지 않는 페이지입니다." />
        }
      />
    </Routes>
  );
};

export default Router;
