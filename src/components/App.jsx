import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { current } from "redux/auth/auth-operations";
import PrivateRoutes from "./Routes/PrivateRoutes";
import PublicRoutes from "./Routes/PublicRoutes";

const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("pages/RegistrationPage/RegistrationPage")
);
const DashbordPage = lazy(() => import("pages/DashboardPage/DashboardPage"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<RegistrationPage />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<DashbordPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
