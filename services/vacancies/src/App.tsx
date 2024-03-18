import { Provider } from "react-redux";

import Vacnacies from "./pages/Vacancies/Vacancies";
import { store } from "./store";

export const App = () => {
	return (
		<Provider store={store}>
			<Vacnacies />
		</Provider>
	);
};
