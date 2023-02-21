import Layout from "components/Layout";
import { useSidebarContext } from "context/SidebarProvider";
import Dashboard from "pages/Dashboard";
import Products from "pages/Products";
import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

export default function RoutesComponent() {
	const { closeSidebar } = useSidebarContext();
	const location = useLocation();
	const switchedPathname = location.pathname.split("/")[1];

	if (location.pathname === "/") {
		return <Navigate to="/dashboard" replace />;
	}

	useEffect(() => {
		closeSidebar();
	}, [switchedPathname]);
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/produtos" element={<Products />} />
			</Route>
		</Routes>
	);
}
