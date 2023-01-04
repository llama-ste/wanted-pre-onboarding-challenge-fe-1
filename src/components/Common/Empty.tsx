import { IEmptyProps } from "./types";
import EmptyView from "./Views/EmptyView";

const Empty = ({ text, btn, containerHeight }: IEmptyProps) => {
  const EmptyProps = {
    text,
    btn,
    containerHeight,
  };
  return <EmptyView {...EmptyProps} />;
};

export default Empty;
