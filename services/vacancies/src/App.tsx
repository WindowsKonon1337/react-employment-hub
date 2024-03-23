import { Provider } from "react-redux";

import { store } from "./store";
import { Outlet } from "react-router-dom";
import { Layout } from "@packages/shared";

export const App = () => {
	return (
		<Layout>
			<Provider store={store}>
				<Outlet />
			</Provider>
		</Layout>
	);
};
