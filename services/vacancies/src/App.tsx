import { Provider } from "react-redux";

import { store } from "./store";
import { Outlet } from "react-router-dom";

export const App = () => {
	return (
		<Provider store={store}>
			<Outlet />
		</Provider>
	);
};
