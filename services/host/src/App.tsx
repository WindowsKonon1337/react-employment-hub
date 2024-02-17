import { Outlet } from "react-router-dom";

import { Layout } from "@packages/shared";

import { Header } from "./components";

export const App = () => {
	return (
		<Layout>
			<Header />
			<Outlet />
		</Layout>
	);
};
