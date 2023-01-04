import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Login from "../../components/Auth/Login";

const Auth = () => {
  const { pathname } = useLocation();
  const isSignUpPage = pathname === "/auth/sign-up";

  return isSignUpPage ? <Outlet /> : <Login />;
};

export default Auth;
