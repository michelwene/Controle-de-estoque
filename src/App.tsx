import { ProductsProvider } from "context/ProductsProvider";
import { SidebarProvider } from "context/SidebarProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesComponent from "routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles";
import theme from "styles/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<ProductsProvider>
				<SidebarProvider>
					<BrowserRouter>
						<Routes>
							<Route path="/*" element={<RoutesComponent />} />
						</Routes>
					</BrowserRouter>
					<GlobalStyle />
				</SidebarProvider>
			</ProductsProvider>
		</ThemeProvider>
	);
}

export default App;
