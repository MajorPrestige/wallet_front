import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { current } from "redux/auth/auth-operations";
import PrivateRoutes from "./Routes/PrivateRoutes";
import PublicRoutes from "./Routes/PublicRoutes";

import Loader from "components/Loader/Loader";

const LoginPage = lazy(() => import("pages/AuthPage/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("pages/AuthPage/RegistrationPage/RegistrationPage"),
);
const HomePage = lazy(() => import("pages/DashboardPage/HomePage/HomePage"));
const StatisticsPage = lazy(() => import("pages/DashboardPage/StatisticsPage/StatisticsPage"));
const CurrencyPage = lazy(() => import("pages/DashboardPage/CurrencyPage/CurrencyPage"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<RegistrationPage />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/currency" element={<CurrencyPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
