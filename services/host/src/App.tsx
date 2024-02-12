import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, baseTheme } from "@packages/shared";
import { Header } from "./components";

export const App = () => {
	return (
		<ThemeProvider theme={baseTheme}>
			<GlobalStyles />
			<Header />
			{/* <Link to={"/profile"}>profile</Link>
			<Link to={"/vacancies"}>vacancies</Link> */}
			<Outlet />
		</ThemeProvider>
	);
};
