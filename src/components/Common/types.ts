import React from "react";
import { IChildrenProps } from "../../types/children";
import { THistory } from "../../types/navigate";

export interface IModalProps extends IChildrenProps {
  open: boolean;
  onClose: () => void;
  headerTitle: string;
  footer: React.ReactElement;
}

export interface ILoadingBar {
  isLoading: boolean;
}

export interface IEmptyProps {
  text: string;
  containerHeight?: string;
  btn?: React.ReactElement;
}

export interface IEmptyContainerProps {
  containerHeight?: string;
}

export interface IRouterProps {
  history: THistory;
  [key: string]: any;
}
