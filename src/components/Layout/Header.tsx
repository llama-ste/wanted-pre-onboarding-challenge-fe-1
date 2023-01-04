import { useNavigate } from "react-router-dom";

import { IHeaderProps } from "./types";
import HeaderView from "./Views/HeaderView";

const Header = () => {
  const navigate = useNavigate();

  const HeaderProps: IHeaderProps = {
    onGoToHome: () => navigate("/todos"),
    onLogout: () => {
      localStorage.removeItem("token");
      navigate("/auth");
    },
  };
  return <HeaderView {...HeaderProps} />;
};

export default Header;
