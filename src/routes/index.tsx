import Layout from "components/Layout";
import Dashboard from "pages/Dashboard";
import Products from "pages/Products";
import { Route, Routes } from "react-router-dom";

export default function RoutesComponent() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Dashboard />} />
				<Route path="/produtos" element={<Products />} />
			</Route>
		</Routes>
	);
}
