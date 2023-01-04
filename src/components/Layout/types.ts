import { IChildrenProps } from "../../types/children";

export interface ILayoutProps extends IChildrenProps {
  isNotAuthPage: boolean;
}

export interface IHeaderProps {
  onGoToHome: () => void;
  onLogout: () => void;
  hasToken: boolean;
}
