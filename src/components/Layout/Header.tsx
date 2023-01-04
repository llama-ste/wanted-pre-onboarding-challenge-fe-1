import { useNavigate } from "react-router-dom";

import { IHeaderProps } from "./types";
import HeaderView from "./Views/HeaderView";

const Header = () => {
  const navigate = useNavigate();
  const hasToken = !!localStorage.getItem("token");

  const HeaderProps: IHeaderProps = {
    onGoToHome: () => navigate("/todos"),
    onLogout: () => {
      localStorage.removeItem("token");
      navigate("/auth");
    },
    hasToken,
  };
  return <HeaderView {...HeaderProps} />;
};

export default Header;
