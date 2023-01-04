import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useToastMessage from "../../hooks/common/useToastMessage";
import { IChildrenProps } from "../../types/children";

const AuthValidator = ({ children }: IChildrenProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const showToast = useToastMessage();
  const isAuthPage = pathname === "/auth" || pathname === "/auth/sign-up";

  useEffect(() => {
    const hasToken = !!localStorage.getItem("token");
    if (hasToken && isAuthPage) {
      showToast("warning", "이미 로그인 되어있습니다.");
      navigate("/todos", { replace: true });
    }

    if (!hasToken && !isAuthPage) {
      showToast("warning", "로그인을 해주세요.");
      navigate("/auth", { replace: true });
    }
  }, [navigate, showToast, isAuthPage]);

  return <Outlet />;
};

export default AuthValidator;
