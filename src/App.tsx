import { SidebarProvider } from "context/SidebarProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesComponent from "routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles";
import theme from "styles/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<SidebarProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/*" element={<RoutesComponent />} />
					</Routes>
				</BrowserRouter>
				<GlobalStyle />
			</SidebarProvider>
		</ThemeProvider>
	);
}

export default App;
