import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { current } from "redux/auth/auth-operations";

const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("pages/RegistrationPage/RegistrationPage")
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<RegistrationPage />} />
      </Routes>
    </Suspense>
  );
};
