import { BrowserHistory } from "history";

interface INavigateOption {
  replace?: boolean;
  state?: any;
}

export type THistory = BrowserHistory;

export type TNavigate = (to: string, option?: INavigateOption) => void;
