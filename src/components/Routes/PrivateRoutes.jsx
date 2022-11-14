import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsLogin } from "redux/auth/auth-selectors";

const PrivateRoutes = () => {
  const isLogin = useSelector(getIsLogin);

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
