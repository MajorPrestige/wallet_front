import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsLogin } from "redux/auth/auth-selectors";

const PublicRoutes = () => {
  const isLogin = useSelector(getIsLogin);

  if (isLogin) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};

export default PublicRoutes;
