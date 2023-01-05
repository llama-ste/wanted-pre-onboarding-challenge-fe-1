import { useLayoutEffect, useState } from "react";
import { Router } from "react-router-dom";
import { IRouterProps } from "./types";

const CustomRouter = ({ history, ...props }: IRouterProps) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

export default CustomRouter;
