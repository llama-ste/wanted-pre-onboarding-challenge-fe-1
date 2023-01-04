import { useLocation } from "react-router-dom";

import { ILayoutProps } from "./types";
import { IChildrenProps } from "../../types/children";
import LayoutView from "./Views/LayoutView";

const Layout = ({ children }: IChildrenProps) => {
  const { pathname } = useLocation();
  const isNotAuthPage = !(pathname === "/auth" || pathname === "/auth/sign-up");

  const LayoutProps: ILayoutProps = { children, isNotAuthPage };

  return <LayoutView {...LayoutProps} />;
};

export default Layout;
