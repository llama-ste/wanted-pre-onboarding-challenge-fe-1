import { toast } from "react-toastify";

type TToastType = "success" | "error" | "warning";

const useToastMessage = () => {
  const toastType = {
    success: (message: string) => toast.success(message),
    error: (message: string) => toast.error(message),
    warning: (message: string) => toast.warning(message),
  };

  const showToast = (type: TToastType, message: string) => {
    toast.dismiss();
    toast.clearWaitingQueue();
    toastType[type](message);
  };

  return showToast;
};

export default useToastMessage;
