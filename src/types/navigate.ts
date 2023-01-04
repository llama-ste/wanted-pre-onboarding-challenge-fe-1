interface INavigateOption {
  replace?: boolean;
  state?: any;
}

export type TNavigate = (to: string, option?: INavigateOption) => void;
