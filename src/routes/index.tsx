import Dashboard from "pages/Dashboard";
import { Route, Routes } from "react-router-dom";

export default function RoutesComponent() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
		</Routes>
	);
}
