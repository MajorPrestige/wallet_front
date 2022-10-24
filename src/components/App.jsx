import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'))
const RegistrationPage = lazy(() => import("pages/RegistrationPage/RegistrationPage"));


export const App = () => {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Routes>
				<Route path="/" element={<LoginPage />}/>
				<Route path="/signup" element={<RegistrationPage />} />
			</Routes>
		</Suspense>
	);
};
