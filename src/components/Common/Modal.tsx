import { IModalProps } from "./types";
import ModalView from "./Views/ModalView";

const Modal = ({
  open,
  onClose,
  headerTitle,
  footer,
  children,
}: IModalProps) => {
  const ModalProps: IModalProps = {
    children,
    open,
    onClose,
    headerTitle,
    footer,
  };

  return <ModalView {...ModalProps} />;
};

export default Modal;
